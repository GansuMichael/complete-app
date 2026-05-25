const express =
require("express");

const router =
express.Router();

const {
   createSale
} = require(
   "../modules/broiler/controllers/broilerSalesController"
);

router.post(
   "/",
   createSale
);

module.exports = router;