const {

    logAudit

} = require(
    "../services/auditService"
);

exports.auditAction =
(action) => {

    return async (req, res, next) => {

        await logAudit({

            userId:
            req.user?.id,

            action

        });

        next();

    };

};