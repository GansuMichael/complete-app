const speakeasy =
require("speakeasy");

exports.generate2FASecret =
(userEmail) => {

    return speakeasy.generateSecret({

        name:
        `PoultryApp (${userEmail})`

    });

};

exports.verify2FACode =
(secret, token) => {

    return speakeasy.totp.verify({

        secret,

        encoding:"base32",

        token

    });

};