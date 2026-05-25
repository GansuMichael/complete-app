const express =
require("express");

const cors =
require("cors");

const dotenv =
require("dotenv");

dotenv.config();

const broilerRoutes =
require("./routes/broilerRoutes");

const feedmillRoutes =
require(
"./modules/feedmill/routes/productionRoutes"
);

const dashboardRoutes =
require("./routes/dashboardRoutes");

const masterDashboardRoutes =
require(
"./masterDashboard/masterDashboardRoutes"
);

const formulaRoutes =
require("./routes/formulaRoutes");

const layersRoutes =
require("./routes/layersRoutes");

const authRoutes =
require("./routes/authRoutes");

const {

    authLimiter

} = require(
    "./config/rateLimiter"
);

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/broiler",
    broilerRoutes
);

app.use(
    "/api/auth",
    authLimiter
);

app.use(
    "/api/layers",
    layersRoutes
);

app.use(
    "/api/formula",
    formulaRoutes
);

app.use(
   "/feedmill",
   feedmillRoutes
);

app.use(
    "/api/dashboard",
    dashboardRoutes
);

app.use(
   "/master-dashboard",
   masterDashboardRoutes
);

app.listen(3000);