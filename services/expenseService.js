const db =
require("../config/firebase");

async function saveExpense(data){

   let expense = {

      title:
      data.title,

      amount:
      Number(data.amount),

      createdAt:
      new Date()
   };

   await db.collection("expenses")
   .add(expense);
}

module.exports = {
   saveExpense
};