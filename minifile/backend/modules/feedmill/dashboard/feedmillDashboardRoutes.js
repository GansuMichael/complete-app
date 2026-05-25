const express =
require("express");

const router =
express.Router();

const {
   getDashboard
} = require(
   "./feedmillDashboardController"
);

router.get(
   "/",
   getDashboard
);

module.exports = router;