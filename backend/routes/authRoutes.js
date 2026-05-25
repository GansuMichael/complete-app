const express =
require("express");

const router =
express.Router();

const {

    register,
    login

} = require(
    "../controllers/authController"
);

router.post(
    "/register",
    register
);

router.post(
    "/login",
    login
);

router.post(
    "/refresh",
    refreshToken
);

router.post(
    "/logout",
    verifyToken,
    logout
);

router.get(
    "/verify/:token",
    verifyEmail
);

router.post(
    "/forgot-password",
    forgotPassword
);

router.post(
    "/reset-password",
    resetPassword
);

module.exports =
router;