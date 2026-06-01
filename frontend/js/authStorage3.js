import { openDB } from "./indexeddb.js";

export async function saveUserOffline(user) {

    const db =
        await openDB(
            "PoultryDB"
        );

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    "auth",
                    "readwrite"
                );

            const store =
                tx.objectStore(
                    "auth"
                );

            const request =
                store.put({
                    id: 1,
                    ...user
                });

            request.onsuccess =
                () => resolve(true);

            request.onerror =
                () =>
                    reject(
                        request.error
                    );

        }
    );
}

export async function getUserOffline() {

    const db =
        await openDB(
            "PoultryDB"
        );

    return new Promise(
        (resolve, reject) => {

            const tx =
                db.transaction(
                    "auth",
                    "readonly"
                );

            const store =
                tx.objectStore(
                    "auth"
                );

            const request =
                store.get(1);

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