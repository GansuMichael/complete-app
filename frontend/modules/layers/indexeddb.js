let db;

export function initDB() {

    return new Promise((resolve, reject) => {

        const request =
        indexedDB.open("PoultryDB", 1);

        request.onupgradeneeded = (event) => {

            db = event.target.result;

            if (
                !db.objectStoreNames.contains(
                    "layersProduction"
                )
            ) {

                db.createObjectStore(
                    "layersProduction",
                    {
                        keyPath: "id",
                        autoIncrement: true
                    }
                );
            }
        };

        request.onsuccess = (event) => {

            db = event.target.result;

            resolve();

        };

        request.onerror = reject;

    });

}

export function addData(store, data) {

    const tx =
    db.transaction([store], "readwrite");

    return tx
        .objectStore(store)
        .add(data);
}

export function getAllData(store) {

    return new Promise((resolve) => {

        const tx =
        db.transaction([store], "readonly");

        const request =
        tx.objectStore(store).getAll();

        request.onsuccess = () =>
        resolve(request.result);

    });

}