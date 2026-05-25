const MASTER_DASHBOARD_API =
"http://localhost:3000/master-dashboard";



async function loadMasterDashboard(){

   let response =
      await fetch(
         MASTER_DASHBOARD_API
      );

   let data =
      await response.json();

   renderMasterDashboard(
      data.masterDashboard
   );
}

// render master dashboard
function renderMasterDashboard(data){

    document.getElementById(
       "enterpriseRevenue"
    ).innerText =
 
    data.enterpriseRevenue;
 
 
 
    document.getElementById(
       "enterpriseExpenses"
    ).innerText =
 
    data.enterpriseExpenses;
 
 
 
    document.getElementById(
       "enterpriseProfit"
    ).innerText =
 
    data.enterpriseProfit;
 }