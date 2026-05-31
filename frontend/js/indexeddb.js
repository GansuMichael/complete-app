// indexeddb.js

const DATABASES = {

    FeedmillDB: [
        "formula",
        "inventory",
        "production",
        "suppliers",
        "purchases",
        "sales"
    ],

    BroilerDB: [
        "birds",
        "feed",
        "medication",
        "mortality",
        "sales"
    ],

    PoultryDB: [
        "layers",
        "eggProduction",
        "feed",
        "vaccination",
        "sales"
    ],

    FarmDB: [
        "users",
        "farms",
        "activities",
        "reports",
        "notifications"
    ]
};

export async function openDB(
    dbName
) {

    return new Promise(
        (resolve, reject) => {

            const request =
                indexedDB.open(
                    dbName,
                    1
                );

            request.onupgradeneeded =
                event => {

                    const db =
                        event.target.result;

                    DATABASES[
                        dbName
                    ].forEach(
                        storeName => {

                            if (
                                !db.objectStoreNames.contains(
                                    storeName
                                )
                            ) {

                                db.createObjectStore(
                                    storeName,
                                    {
                                        keyPath: "id",
                                        autoIncrement: true
                                    }
                                );
                            }
                        }
                    );
                };

            request.onsuccess =
                () =>
                    resolve(
                        request.result
                    );

            request.onerror =
                () =>
                    reject(
                        request.error
                    );
        }
    );
}

export async function addData(
    dbName,
    storeName,
    data
) {

    const db =
        await openDB(
            dbName
        );

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    storeName,
                    "readwrite"
                );

            const store =
                tx.objectStore(
                    storeName
                );

            const request =
                store.add(data);

            request.onsuccess =
                () =>
                    resolve(
                        request.result
                    );

            request.onerror =
                () =>
                    reject(
                        request.error
                    );
        }
    );
}

export async function getData(
    dbName,
    storeName
) {

    const db =
        await openDB(
            dbName
        );

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    storeName,
                    "readonly"
                );

            const store =
                tx.objectStore(
                    storeName
                );

            const request =
                store.getAll();

            request.onsuccess =
                () =>
                    resolve(
                        request.result
                    );

            request.onerror =
                () =>
                    reject(
                        request.error
                    );
        }
    );
}

export async function updateData(
    dbName,
    storeName,
    data
) {

    const db =
        await openDB(
            dbName
        );

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    storeName,
                    "readwrite"
                );

            const store =
                tx.objectStore(
                    storeName
                );

            const request =
                store.put(data);

            request.onsuccess =
                () =>
                    resolve();

            request.onerror =
                () =>
                    reject(
                        request.error
                    );
        }
    );
}

export async function deleteData(
    dbName,
    storeName,
    id
) {

    const db =
        await openDB(
            dbName
        );

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    storeName,
                    "readwrite"
                );

            const store =
                tx.objectStore(
                    storeName
                );

            const request =
                store.delete(id);

            request.onsuccess =
                () =>
                    resolve();

            request.onerror =
                () =>
                    reject(
                        request.error
                    );
        }
    );
}

export async function getById(
    dbName,
    storeName,
    id
) {

    const db =
        await openDB(
            dbName
        );

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    storeName,
                    "readonly"
                );

            const store =
                tx.objectStore(
                    storeName
                );

            const request =
                store.get(id);

            request.onsuccess =
                () =>
                    resolve(
                        request.result
                    );

            request.onerror =
                () =>
                    reject(
                        request.error
                    );
        }
    );
}

