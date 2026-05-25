const db =
require("../config/firebase");

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

   await db.collection("sales")
   .add(sale);
}

module.exports = {
   saveSale
};