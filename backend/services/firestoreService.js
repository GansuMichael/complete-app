const db =
require("../config/firebase");

exports.saveFormulaToFirestore =
async (formula) => {

    await db.collection("formula")
    .add(formula);

};