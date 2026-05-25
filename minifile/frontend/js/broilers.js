const BROILER_API =
"http://localhost:3000/broiler";

const SALES_API =
"http://localhost:3000/sales";

const EXPENSE_API =
"http://localhost:3000/expenses";

const DASHBOARD_API =
"http://localhost:3000/dashboard";

const MASTER_API =
"http://localhost:3000/master-dashboard";

async function saveSale(){

    // CAPTURE USER INPUT
 
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
 
 
    // CREATE OBJECT
 
    let saleData = {
 
       customer,
 
       quantity,
 
       unitPrice
    };
 
   // SAVE TO INDEXEDDB
   // ======================

   saveToIndexedDB(sale);



   // ======================
   // RENDER IMMEDIATELY
   // ======================

   loadIndexedDBSales();
 
    // SEND TO BACKEND
 
    await fetch(SALES_API, {
 
       method: "POST",
 
       headers: {
          "Content-Type":
          "application/json"
       },
 
       body:
       JSON.stringify(saleData)
    });
 
    // UPDATE MASTER DASHBOARD

    loadMasterDashboard();
    // RELOAD DASHBOARD
 
    loadDashboard();
 }

 async function loadDashboard(){

    let response =
       await fetch(
          DASHBOARD_API
       );
 
    let data =
       await response.json();
 
    renderSalesTable(
       data.sales
    );
 
    renderExpensesTable(
       data.expenses
    );
 
    updateDashboard(
       data.dashboard
    );
 }

// render sales table
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

// render expense table
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

// render broiler table

// update dashboard
function updateDashboard(dashboard){

    document.getElementById(
       "revenue"
    ).innerText =
    dashboard.totalRevenue;
 
 
    document.getElementById(
       "expenses"
    ).innerText =
    dashboard.totalExpenses;
 
 
    document.getElementById(
       "profit"
    ).innerText =
    dashboard.profit;
 }

// render sales table from indexedDB
