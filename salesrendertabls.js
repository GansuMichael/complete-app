const API_URL =
"http://localhost:3000/sales";


// ============================
// SAVE SALE
// ============================

async function saveSale(){

   let customer =
      document.getElementById("customer").value;

   let quantity =
      document.getElementById("quantity").value;

   let saleData = {
      customer,
      quantity
   };

   try{

      let response = await fetch(
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

      document.getElementById("message")
         .innerText = result.message;

      // Reload table
      loadSales();

   }catch(error){

      console.log(error);

      document.getElementById("message")
         .innerText =
         "Error saving sale";
   }
}



// ============================
// LOAD SALES
// ============================

async function loadSales(){

   try{

      let response =
         await fetch(API_URL);

      let sales =
         await response.json();

      renderSalesTable(sales);

   }catch(error){

      console.log(error);
   }
}



// ============================
// RENDER TABLE
// ============================

function renderSalesTable(sales){

   let table =
      document.getElementById(
         "salesTable"
      );

   table.innerHTML = "";

   sales.forEach(sale => {

      table.innerHTML += `
         <tr>
            <td>${sale.customer}</td>
            <td>${sale.quantity}</td>
         </tr>
      `;
   });
}



// Load immediately
loadSales();