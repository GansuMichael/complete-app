const express = require("express");
const cors = require("cors");

const salesRoutes =
   require("./routes/salesRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/sales", salesRoutes);

app.listen(3000, () => {
   console.log("Server running");
});