const db =
require("../config/firebase");



async function saveSale(data){

   // CONVERT TO NUMBERS

   let quantity =
      Number(data.quantity);

   let unitPrice =
      Number(data.unitPrice);


   // BUSINESS CALCULATION

   let total =
      quantity * unitPrice;


   // CREATE DATABASE OBJECT

   let sale = {

      customer:
      data.customer,

      quantity,

      unitPrice,

      total,

      createdAt:
      new Date()
   };


   // SAVE TO FIRESTORE

   await db.collection("sales")
   .add(sale);
}


module.exports = {
   saveSale
};