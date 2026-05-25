async function saveAuth(token,user){

    const transaction =
    db.transaction(
       ['auth'],
       'readwrite'
    );
 
    const store =
    transaction.objectStore('auth');
 
    store.put({
 
       id:1,
       token,
       user
 
    });
 
 }
 
 async function getAuth(){
 
    return new Promise((resolve)=>{
 
       const transaction =
       db.transaction(
          ['auth'],
          'readonly'
       );
 
       const store =
       transaction.objectStore('auth');
 
       const request =
       store.get(1);
 
       request.onsuccess = ()=>{
 
          resolve(request.result);
 
       };
 
    });
 
 }