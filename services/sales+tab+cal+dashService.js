const db =
require("../config/firebase");



// ========================
// SAVE SALE
// ========================

async function saveSale(data){

   let quantity =
      Number(data.quantity);

   let unitPrice =
      Number(data.unitPrice);

   // BUSINESS CALCULATION
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
   await db.collection("sales")
   .add(sale);
}



// ========================
// FETCH SALES + DASHBOARD
// ========================

async function fetchSalesAndDashboard(){

   let snapshot =
      await db.collection("sales")
      .get();

   let sales = [];

   // DASHBOARD VARIABLES
   let totalSales = 0;

   let totalQuantity = 0;

   let totalRevenue = 0;


   snapshot.forEach(doc => {

      let sale = {
         id: doc.id,
         ...doc.data()
      };

      sales.push(sale);

      // DASHBOARD CALCULATIONS
      totalSales++;

      totalQuantity +=
         sale.quantity;

      totalRevenue +=
         sale.total;
   });

   return {

      sales,

      dashboard: {

         totalSales,

         totalQuantity,

         totalRevenue
      }
   };
}


module.exports = {
   saveSale,
   fetchSalesAndDashboard
};