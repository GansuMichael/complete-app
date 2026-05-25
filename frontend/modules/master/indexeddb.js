let db;

export function initDB() {

    return new Promise((resolve, reject) => {

        const request =
        indexedDB.open("FarmDB", 1);

        request.onupgradeneeded = (event) => {

            db = event.target.result;

            [
                "broilerRecords",
                "layersData",
                "broilerSales",
                "broilerExpenses"
            ].forEach(store => {

                if (
                    !db.objectStoreNames.contains(store)
                ) {

                    db.createObjectStore(
                        store,
                        {
                            keyPath: "id",
                            autoIncrement: true
                        }
                    );

                }

            });

        };

        request.onsuccess = (event) => {

            db = event.target.result;

            resolve();

        };

        request.onerror = reject;

    });

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