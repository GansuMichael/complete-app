let db;

function initDB() {

    return new Promise((resolve, reject) => {

        const request =
        indexedDB.open("PoultryDB", 1);

        request.onupgradeneeded = (event) => {

            db = event.target.result;

            if (
                !db.objectStoreNames.contains("users")
            ) {

                db.createObjectStore(
                    "users",
                    {
                        keyPath:"id",
                        autoIncrement:true
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

async function saveUserOffline(user) {

    const tx =
    db.transaction(["users"], "readwrite");

    const store =
    tx.objectStore("users");

    store.add(user);
}

initDB();