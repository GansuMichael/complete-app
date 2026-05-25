const express =
require("express");

const cors =
require("cors");

const salesRoutes =
require("./routes/salesRoutes");

const expenseRoutes =
require("./routes/expenseRoutes");

const dashboardService =
require("./dashboard/dashboardService");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/sales", salesRoutes);

app.use("/expenses", expenseRoutes);



// ======================
// DASHBOARD API
// ======================

app.get("/dashboard",
async (req, res) => {

   let dashboard =
      await dashboardService();

   res.json(dashboard);
});


app.listen(3000, () => {
   console.log("Server running");
});