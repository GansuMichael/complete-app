const db =
require("../config/firebase");

exports.logAudit =
async (data) => {

    await db
    .collection("auditLogs")
    .add({

        ...data,

        timestamp:
        new Date()

    });

};