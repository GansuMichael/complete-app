const masterDashboardService =
require(
   "./masterDashboardService"
);



async function getMasterDashboard(
   req,
   res
){

   try{

      // CALL SERVICE

      let dashboardData =

         await masterDashboardService();


      // RETURN RESPONSE

      res.json(dashboardData);

   }catch(error){

      console.log(error);

      res.status(500).json({

         message:
         "Master dashboard error"
      });
   }
}


module.exports = {
   getMasterDashboard
};