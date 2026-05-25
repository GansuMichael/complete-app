const express =
require("express");

const router =
express.Router();

const {
   createSale
} = require(
   "../modules/layers/controllers/layersSalesController"
);

router.post(
   "/",
   createSale
);

module.exports = router;