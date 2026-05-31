export function openDB() {

    return new Promise((resolve, reject) => {

        const request = indexedDB.open(
            DB_NAME,
            DB_VERSION
        );

        request.onupgradeneeded = (event) => {

            const db = event.target.result;

            if (
                !db.objectStoreNames.contains(
                    STORE_NAME
                )
            ) {

                const store =
                    db.createObjectStore(
                        STORE_NAME,
                        {
                            keyPath: "id",
                            autoIncrement: true
                        }
                    );

                store.createIndex(
                    "ingredientName",
                    "ingredientName",
                    { unique: false }
                );
            }
        };

        request.onsuccess = () =>
            resolve(request.result);

        request.onerror = () =>
            reject(request.error);
    });
}

export async function addInventory(item) {

    const db = await openDB();

    const tx = db.transaction(
        STORE_NAME,
        "readwrite"
    );

    const store = tx.objectStore(STORE_NAME);

    store.add({
        ingredientName: item.ingredientName,
        quantity: item.quantity,
        unit: item.unit,
        unitCost: item.unitCost,
        minimumLevel: item.minimumLevel,
        synced: false,
        createdAt: Date.now()
    });

    await tx.complete;

    syncInventory();
}

export async function getInventory() {

    const db = await openDB();

    return new Promise((resolve) => {

        const tx =
            db.transaction(
                STORE_NAME,
                "readonly"
            );

        const store =
            tx.objectStore(STORE_NAME);

        const request =
            store.getAll();

        request.onsuccess = () =>
            resolve(request.result);
    });
}

export async function updateStock(
    id,
    newQty
) {

    const db = await openDB();

    const tx = db.transaction(
        STORE_NAME,
        "readwrite"
    );

    const store =
        tx.objectStore(STORE_NAME);

    const request =
        store.get(id);

    request.onsuccess = () => {

        const data =
            request.result;

        data.quantity = newQty;
        data.synced = false;

        store.put(data);
    };

    syncInventory();
}

export async function useIngredient(
    ingredientId,
    quantityUsed
) {

    const db = await openDB();

    const tx = db.transaction(
        STORE_NAME,
        "readwrite"
    );

    const store =
        tx.objectStore(STORE_NAME);

    const request =
        store.get(ingredientId);

    request.onsuccess = () => {

        const ingredient =
            request.result;

        ingredient.quantity -=
            quantityUsed;

        ingredient.synced = false;

        store.put(ingredient);
    };

    syncInventory();
}

export async function lowStockItems() {

    const items =
        await getInventory();

    return items.filter(item =>
        item.quantity <=
        item.minimumLevel
    );
}

export async function totalInventoryValue() {

    const items =
        await getInventory();

    return items.reduce(
        (sum, item) =>
            sum +
            item.quantity *
            item.unitCost,
        0
    );
}

export async function syncInventory() {

    if (!navigator.onLine)
        return;

    const items =
        await getInventory();

    const unsynced =
        items.filter(
            item => !item.synced
        );

    for (const item of unsynced) {

        await addDoc(
            collection(
                db,
                "inventory"
            ),
            item
        );

        const localDB =
            await openDB();

        const tx =
            localDB.transaction(
                STORE_NAME,
                "readwrite"
            );

        const store =
            tx.objectStore(
                STORE_NAME
            );

        item.synced = true;

        store.put(item);
    }
}

window.addEventListener(
    "online",
    () => {

        console.log(
            "Internet restored"
        );

        syncInventory();
    }
);

