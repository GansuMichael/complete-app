const db =
require("../../../config/firebase");

async function layersDashboardService(){

   let layersSnapshot =
      await db.collection(
         "layers"
      ).get();

   let layersExpenseSnapshot =
      await db.collection(
         "layersExpenses"
      ).get();

   let layersSalesSnapshot =
      await db.collection(
         "layersSales"
      ).get();



   let eggs = [];

   let layersExpenses = [];

   let layersSales = [];


   let totalEggsProduced = 0;

   let totalCost = 0;

   let totalRevenue = 0;



   layersSnapshot.forEach(doc => {

      let layers =
         doc.data();

      layers.push(layers);

      totalEggsProduced +=
         layers.EggsProduced;

      totalCost +=
         layers.totalCost;
   });



   layersExpenseSnapshot
   .forEach(doc => {

      let expense =
         doc.data();

      layersExpenses
      .push(expense);

      totalCost +=
         expense.amount;
   });



   layersSalesSnapshot
   .forEach(doc => {

      let sale =
         doc.data();

      layersSales
      .push(sale);

      totalRevenue +=
         sale.total;
   });



   let profit =
      totalRevenue -
      totalCost;



   return {

      eggs,

      layersExpenses,

      layersSales,

      dashboard: {

         totalEggsProduced,

         totalCost,

         totalRevenue,

         profit
      }
   };
}

module.exports =
layersDashboardService;