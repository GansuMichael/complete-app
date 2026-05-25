let db;

export function initDB() {

    return new Promise((resolve, reject) => {

        const request =
        indexedDB.open("FeedmillDB", 1);

        request.onupgradeneeded = (event) => {

            db = event.target.result;

            if (!db.objectStoreNames.contains("formula")) {

                db.createObjectStore(
                    "formula",
                    { keyPath: "id", autoIncrement: true }
                );
            }

            if (!db.objectStoreNames.contains("inventory")) {

                db.createObjectStore(
                    "inventory",
                    { keyPath: "id", autoIncrement: true }
                );
            }

        };

        request.onsuccess = (event) => {

            db = event.target.result;

            resolve();
        };

        request.onerror = () => reject();

    });

}

export function addData(storeName, data) {

    const transaction =
    db.transaction([storeName], "readwrite");

    const store =
    transaction.objectStore(storeName);

    return store.add(data);
}