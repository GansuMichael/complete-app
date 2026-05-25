const express =
require("express");

const router =
express.Router();

const {

    addRecord,
    addSale,
    addExpense

} = require(
    "../controllers/broilerController"
);

router.post(
    "/record",
    addRecord
);

router.post(
    "/sale",
    addSale
);

router.post(
    "/expense",
    addExpense
);

module.exports =
router;