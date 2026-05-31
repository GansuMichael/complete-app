const DB_NAME = "gansuDB";

const DB_VERSION = 1;

const STORE_NAME = "farmDB";

let db;

// ========================================
// OPEN DATABASE
// ========================================

function openDB() {

   return new Promise((resolve, reject) => {

      const request =
         indexedDB.open(
            DB_NAME,
            DB_VERSION
         );

      // ========================================
      // CREATE DATABASE
      // ========================================

      request.onupgradeneeded = (event) => {

         db = event.target.result;

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

            // INDEXES

            store.createIndex(
               "feedUsed",
               "feedUsed",
               {
                  unique: false
               }
            );

            store.createIndex(
               "date",
               "date",
               {
                  unique: false
               }
            );

         }

      };

      // ========================================
      // SUCCESS
      // ========================================

      request.onsuccess = (event) => {

         db = event.target.result;

         resolve(db);

      };

      // ========================================
      // ERROR
      // ========================================

      request.onerror = (event) => {

         reject(event.target.error);

      };

   });

}

// save function
async function saveRecord(record){

    const database =
       await openDB();
 
    const transaction =
       database.transaction(
          STORE_NAME,
          "readwrite"
       );
 
    const store =
       transaction.objectStore(
          STORE_NAME
       );
 
    store.add(record);
 
    return transaction.complete;
 
}

// get all record
async function getRecords(){

    return new Promise(async (resolve, reject) => {
 
       const database =
          await openDB();
 
       const transaction =
          database.transaction(
             STORE_NAME,
             "readonly"
          );
 
       const store =
          transaction.objectStore(
             STORE_NAME
          );
 
       const request =
          store.getAll();
 
       request.onsuccess = () => {
 
          resolve(request.result);
 
       };
 
       request.onerror = () => {
 
          reject(request.error);
 
       };
 
    });
 
}

// export function
export {
    openDB,
    saveRecord,
    getRecords
};
