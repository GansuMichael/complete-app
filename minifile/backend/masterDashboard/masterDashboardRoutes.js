const express =
require("express");

const router =
express.Router();

const {
   getMasterDashboard
} = require(
   "./masterDashboardController"
);

router.get(
   "/",
   getMasterDashboard
);

module.exports = router;