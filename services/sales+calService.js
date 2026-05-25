const db =
require("../config/firebase");



// ===========================
// SAVE SALE
// ===========================

async function saveSale(data){

   // Convert to numbers
   let quantity =
      Number(data.quantity);

   let unitPrice =
      Number(data.unitPrice);

   // BUSINESS LOGIC
   let total =
      quantity * unitPrice;

   let sale = {

      customer:
      data.customer,

      quantity,

      unitPrice,

      total,

      createdAt:
      new Date()
   };

   // Save to Firestore
   let docRef =
      await db.collection("sales")
      .add(sale);

   return {
      id: docRef.id,
      ...sale
   };
}



// ===========================
// FETCH SALES
// ===========================

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