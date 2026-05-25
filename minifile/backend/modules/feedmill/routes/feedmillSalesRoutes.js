const express =
require("express");

const router =
express.Router();

const {
   createSale
} = require(
   "../modules/feedmill/controllers/feedmillSalesController"
);

router.post(
   "/",
   createSale
);

module.exports = router;