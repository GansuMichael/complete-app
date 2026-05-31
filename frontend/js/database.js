// ============================================
// DATABASE
// ============================================

let db;

// ============================================
// OPEN DATABASE
// ============================================

const request =
indexedDB.open(

   "GansuDB",

   1

);

// ============================================
// CREATE TABLES / OBJECT STORES
// ============================================

request.onupgradeneeded =
(event) => {

   db =
   event.target.result;

   // AUTH STORE

   if(
      !db.objectStoreNames.contains(
         "auth"
      )
   ){

      db.createObjectStore(

         "auth",

         {

            keyPath: "id"

         }

      );

   }

   // OFFLINE DATA STORE

   if(
      !db.objectStoreNames.contains(
         "offlineData"
      )
   ){

      db.createObjectStore(

         "offlineData",

         {

            keyPath: "id",
            autoIncrement: true

         }

      );

   }

};

// ============================================
// DATABASE READY
// ============================================

request.onsuccess =
(event) => {

   db =
   event.target.result;

   console.log(
      "IndexedDB Connected"
   );

};

request.onerror =
(event) => {

   console.log(
      "Database Error",
      event.target.error
   );

};