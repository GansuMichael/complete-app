const db =
require("../../../config/firebase");

async function feedmillDashboardService(){

   let feedmillSnapshot =
      await db.collection(
         "feedmill"
      ).get();

   let feedmillExpenseSnapshot =
      await db.collection(
         "feedmillExpenses"
      ).get();

   let feedmillSalesSnapshot =
      await db.collection(
         "feedmillSales"
      ).get();



   let productions = [];

   let feedmillExpenses = [];

   let feedmillSales = [];


   let totalProduced = 0;

   let totalCost = 0;

   let totalRevenue = 0;



   feedmillSnapshot.forEach(doc => {

      let feedmill =
         doc.data();

      productions.push(feedmill);

      totalProduced +=
         feedmill.bagsProduced;

      totalCost +=
         feedmill.totalCost;
   });



   feedmillExpenseSnapshot
   .forEach(doc => {

      let expense =
         doc.data();

      feedmillExpenses
      .push(expense);

      totalCost +=
         expense.amount;
   });



   feedmillSalesSnapshot
   .forEach(doc => {

      let sale =
         doc.data();

      feedmillSales
      .push(sale);

      totalRevenue +=
         sale.total;
   });



   let profit =
      totalRevenue -
      totalCost;



   return {

      productions,

      feedmillExpenses,

      feedmillSales,

      dashboard: {

         totalProduced,

         totalCost,

         totalRevenue,

         profit
      }
   };
}

module.exports =
feedmillDashboardService;