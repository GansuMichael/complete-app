const useragent =
require("useragent");

exports.trackDevice =
(req, res, next) => {

    const agent =
    useragent.parse(

        req.headers["user-agent"]

    );

    req.device = {

        browser:
        agent.toAgent(),

        ip:
        req.ip

    };

    next();

};