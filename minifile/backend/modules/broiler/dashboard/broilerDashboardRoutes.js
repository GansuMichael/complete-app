const express =
require("express");

const router =
express.Router();

const {
   getDashboard
} = require(
   "./broilerDashboardController"
);

router.get(
   "/",
   getDashboard
);

module.exports = router;