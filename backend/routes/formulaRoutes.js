const express =
require("express");

const router =
express.Router();

const {
    saveFormula
} = require(
    "../controllers/formulaController"
);

router.post("/", saveFormula);

module.exports = router;