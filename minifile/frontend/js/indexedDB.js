let db;



// OPEN DATABASE

let request =
indexedDB.open(
   "EnterpriseERP",
   1
);



// CREATE TABLES

request.onupgradeneeded =
function(event){

   db =
   event.target.result;


   // BROILER STORE

   db.createObjectStore(
      "broiler",
      {
         keyPath: "id",
         autoIncrement: true
      }
   );

   
   // LAYERS STORE

   db.createObjectStore(
    "layers",
    {
       keyPath: "id",
       autoIncrement: true
    }
 );



   // FEEDMILL STORE

   db.createObjectStore(
      "feedmill",
      {
         keyPath: "id",
         autoIncrement: true
      }
   );
};



// DATABASE READY

request.onsuccess =
function(event){

   db =
   event.target.result;

   console.log(
      "IndexedDB connected"
   );
};

// save to indexedDB
function saveLocalSale(sale){

    let transaction =
    db.transaction(
       ["sales"],
       "readwrite"
    );
 
    let store =
    transaction.objectStore(
       "sales"
    );
 
    store.add(sale);
 }

// render
function loadLocalSales(){

    let transaction =
    db.transaction(
       ["sales"],
       "readonly"
    );
 
    let store =
    transaction.objectStore(
       "sales"
    );
 
    let request =
    store.getAll();
 
 
 
    request.onsuccess =
    function(){
 
       renderSalesTable(
          request.result
       );
    };
 }