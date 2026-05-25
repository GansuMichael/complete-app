const db =
require("../../../config/firebase");

async function broilerDashboardService(){

   let broilerSnapshot =
      await db.collection(
         "broiler"
      ).get();

   let broilerExpenseSnapshot =
      await db.collection(
         "broierExpenses"
      ).get();

   let broierSalesSnapshot =
      await db.collection(
         "broilerSales"
      ).get();



   let broiler = [];

   let broilerExpenses = [];

   let broilerSales = [];


   let totalBroilerProduced = 0;

   let totalCost = 0;

   let totalRevenue = 0;



   broilerSnapshot.forEach(doc => {

      let broiler =
         doc.data();

      broiler.push(broiler);

      totalBroilerProduced +=
         broiler.broilerProduced;

      totalCost +=
         broiler.totalCost;
   });



   broilerExpenseSnapshot
   .forEach(doc => {

      let expense =
         doc.data();

      broilerExpenses
      .push(expense);

      totalCost +=
         expense.amount;
   });



   broilerSalesSnapshot
   .forEach(doc => {

      let sale =
         doc.data();

      broierSales
      .push(sale);

      totalRevenue +=
         sale.total;
   });



   let profit =
      totalRevenue -
      totalCost;



   return {

      broiler,

      broilerExpenses,

      broilerSales,

      dashboard: {

         totalBroierProduced,

         totalCost,

         totalRevenue,

         profit
      }
   };
}

module.exports =
broilerDashboardService;