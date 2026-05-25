const express =
require("express");

const router =
express.Router();

const {

    verifyToken

} = require(
    "../middleware/authMiddleware"
);

const {

    getDashboardSummary

} = require(
    "../controllers/dashboardController"
);

router.get(

    "/",

    verifyToken,

    (req, res) => {

        res.json({

            message:
            "Protected dashboard",

            user:
            req.user

        });

    }

);

router.get(
    "/",
    getDashboardSummary
);

module.exports =
router;

