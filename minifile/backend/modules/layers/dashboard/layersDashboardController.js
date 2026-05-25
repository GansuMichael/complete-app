const dashboardService =
require(
   "./layersDashboardService"
);



async function getDashboard(req, res){

   try{

      // CALL SERVICE

      let dashboardData =
         await dashboardService();


      // RETURN RESPONSE

      res.json(dashboardData);

   }catch(error){

      console.log(error);

      res.status(500).json({

         message:
         "Dashboard error"
      });
   }
}


module.exports = {
   getDashboard
};