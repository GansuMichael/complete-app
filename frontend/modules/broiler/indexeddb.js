let db;

export function initDB() {

    return new Promise((resolve, reject) => {

        const request =
        indexedDB.open("BroilerDB", 1);

        request.onupgradeneeded = (event) => {

            db = event.target.result;

            if (
                !db.objectStoreNames.contains(
                    "broilerRecords"
                )
            ) {

                db.createObjectStore(
                    "broilerRecords",
                    {
                        keyPath: "id",
                        autoIncrement: true
                    }
                );
            }

            if (
                !db.objectStoreNames.contains(
                    "broilerSales"
                )
            ) {

                db.createObjectStore(
                    "broilerSales",
                    {
                        keyPath: "id",
                        autoIncrement: true
                    }
                );
            }

            if (
                !db.objectStoreNames.contains(
                    "broilerExpenses"
                )
            ) {

                db.createObjectStore(
                    "broilerExpenses",
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