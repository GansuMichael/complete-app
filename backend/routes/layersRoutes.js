const express =
require("express");

const router =
express.Router();

const {

    createProduction,
    getProductions

} = require(
    "../controllers/layersController"
);

router.post(
    "/",
    createProduction
);

router.get(
    "/",
    getProductions
);

module.exports =
router;