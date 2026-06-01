let db;

const request = indexedDB.open("dbName", 1);

request.onupgradeneeded = (event) => {

db = event.target.result;

if (!db.objectStoreNames.contains("auth")) {

    db.createObjectStore(
        "auth",
        {
            keyPath: "id"
        }
    );

}

};

request.onsuccess = (event) => {

db = event.target.result;

console.log("Database connected");

};

request.onerror = (event) => {

console.error(
    "Database error:",
    event.target.error
);

};

request.onsuccess = (event) => {

    db = event.target.result;

    window.db = db;

    console.log("Database connected");

};
