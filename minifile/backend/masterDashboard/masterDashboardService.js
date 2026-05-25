const broilerDashboardService =
require(
"../../modules/broiler/dashboard/broilerDashboardService"
);

const layersDashboardService =
require(
"../../modules/layers/dashboard/layersDashboardService"
);

const feedmillDashboardService =
require(
"../../modules/feedmill/dashboard/feedmillDashboardService"
);



async function masterDashboardService(){

   // LOAD MODULES

   let broilerModule =
      await broierDashboardService();

    let layersModule =
      await layersDashboardService();

   let feedmillModule =
      await feedmillDashboardService();



   // COMBINE KPIs

   let enterpriseRevenue =

      broilerModule.dashboard.revenue +

      layersModule.dashboard.revenue +

      feedmillModule.dashboard
      .totalRevenue;



   let enterpriseExpenses =

      layersModule.dashboard
      .expensesTotal +

      broilerModule.dashboard
      .expensesTotal +

      feedmillModule.dashboard
      .totalCost;



   let enterpriseProfit =

      enterpriseRevenue -
      enterpriseExpenses;



   return {

      broierModule,

      layersModule,

      feedmillModule,

      masterDashboard: {

         enterpriseRevenue,

         enterpriseExpenses,

         enterpriseProfit
      }
   };
}


module.exports =
masterDashboardService;