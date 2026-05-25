exports.sessionManager =
(req, res, next) => {

    req.sessionStart =
    Date.now();

    next();

};