const db =
require("../config/firebase");


// ============================
// SAVE SALE
// ============================

async function saveSale(data){

   let sale = {
      customer: data.customer,

      quantity:
      Number(data.quantity),

      createdAt:
      new Date()
   };

   let docRef =
      await db.collection("sales")
      .add(sale);

   return {
      id: docRef.id,
      ...sale
   };
}



// ============================
// FETCH SALES
// ============================

async function fetchSales(){

   let snapshot =
      await db.collection("sales")
      .get();

   let sales = [];

   snapshot.forEach(doc => {

      sales.push({
         id: doc.id,
         ...doc.data()
      });
   });

   return sales;
}


module.exports = {
   saveSale,
   fetchSales
};