const API_URL =
"http://localhost:3000/sales";



// ========================
// SAVE SALE
// ========================

async function saveSale(){

   let customer =
      document.getElementById(
         "customer"
      ).value;

   let quantity =
      document.getElementById(
         "quantity"
      ).value;

   let unitPrice =
      document.getElementById(
         "unitPrice"
      ).value;

   let saleData = {
      customer,
      quantity,
      unitPrice
   };

   try{

      let response =
         await fetch(
            API_URL,
            {
               method: "POST",

               headers: {
                  "Content-Type":
                  "application/json"
               },

               body: JSON.stringify(
                  saleData
               )
            }
         );

      let result =
         await response.json();

      document.getElementById(
         "message"
      ).innerText =
      result.message;

      // Reload dashboard + table
      loadSales();

   }catch(error){

      console.log(error);
   }
}



// ========================
// LOAD SALES
// ========================

async function loadSales(){

   try{

      let response =
         await fetch(API_URL);

      let result =
         await response.json();

      renderSalesTable(
         result.sales
      );

      updateDashboard(
         result.dashboard
      );

   }catch(error){

      console.log(error);
   }
}



// ========================
// RENDER TABLE
// ========================

function renderSalesTable(sales){

   let table =
      document.getElementById(
         "salesTable"
      );

   table.innerHTML = "";

   sales.forEach(sale => {

      table.innerHTML += `
         <tr>

            <td>
               ${sale.customer}
            </td>

            <td>
               ${sale.quantity}
            </td>

            <td>
               ${sale.unitPrice}
            </td>

            <td>
               ${sale.total}
            </td>

         </tr>
      `;
   });
}



// ========================
// UPDATE DASHBOARD
// ========================

function updateDashboard(dashboard){

   document.getElementById(
      "totalSales"
   ).innerText =
   dashboard.totalSales;

   document.getElementById(
      "totalQuantity"
   ).innerText =
   dashboard.totalQuantity;

   document.getElementById(
      "totalRevenue"
   ).innerText =
   dashboard.totalRevenue;
}



// Initial load
loadSales();