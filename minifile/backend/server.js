const express =
require("express");

const cors =
require("cors");

const broilerRoutes =
require(
"./modules/broiler/routes/productionRoutes"
);

const layersRoutes =
require(
"./modules/layers/routes/salesRoutes"
);

const feedmillRoutes =
require(
"./modules/feedmill/routes/productionRoutes"
);

const masterDashboardRoutes =
require(
"./masterDashboard/masterDashboardRoutes"
);



const app = express();

app.use(cors());

app.use(express.json());

app.use("/broiler", broilerRoutes);

app.use("/layers", layersRoutes);

app.use(
   "/feedmill",
   feedmillRoutes
);

app.use(
   "/master-dashboard",
   masterDashboardRoutes
);

app.listen(3000);