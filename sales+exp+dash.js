const SALES_API =
"http://localhost:3000/sales";

const EXPENSE_API =
"http://localhost:3000/expenses";

const DASHBOARD_API =
"http://localhost:3000/dashboard";



// ======================
// SAVE SALE
// ======================

async function saveSale(){

   let saleData = {

      customer:
      document.getElementById(
         "customer"
      ).value,

      quantity:
      document.getElementById(
         "quantity"
      ).value,

      unitPrice:
      document.getElementById(
         "unitPrice"
      ).value
   };

   await fetch(SALES_API, {

      method: "POST",

      headers: {
         "Content-Type":
         "application/json"
      },

      body:
      JSON.stringify(saleData)
   });

   loadDashboard();
}



// ======================
// SAVE EXPENSE
// ======================

async function saveExpense(){

   let expenseData = {

      title:
      document.getElementById(
         "expenseTitle"
      ).value,

      amount:
      document.getElementById(
         "expenseAmount"
      ).value
   };

   await fetch(EXPENSE_API, {

      method: "POST",

      headers: {
         "Content-Type":
         "application/json"
      },

      body:
      JSON.stringify(expenseData)
   });

   loadDashboard();
}



// ======================
// LOAD DASHBOARD
// ======================

async function loadDashboard(){

   let response =
      await fetch(DASHBOARD_API);

   let data =
      await response.json();

   renderSalesTable(data.sales);

   renderExpensesTable(
      data.expenses
   );

   updateDashboard(
      data.dashboard
   );
}



// ======================
// SALES TABLE
// ======================

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



// ======================
// EXPENSE TABLE
// ======================

function renderExpensesTable(expenses){

   let table =
      document.getElementById(
         "expensesTable"
      );

   table.innerHTML = "";

   expenses.forEach(expense => {

      table.innerHTML += `
         <tr>

            <td>
               ${expense.title}
            </td>

            <td>
               ${expense.amount}
            </td>

         </tr>
      `;
   });
}



// ======================
// UPDATE DASHBOARD
// ======================

function updateDashboard(dashboard){

   document.getElementById(
      "totalRevenue"
   ).innerText =
   dashboard.totalRevenue;

   document.getElementById(
      "totalExpenses"
   ).innerText =
   dashboard.totalExpenses;

   document.getElementById(
      "profit"
   ).innerText =
   dashboard.profit;

   document.getElementById(
      "totalQuantity"
   ).innerText =
   dashboard.totalQuantity;
}


// Initial load
loadDashboard();