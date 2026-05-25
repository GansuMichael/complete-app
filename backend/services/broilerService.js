const db =
require("../config/firebase");

exports.saveRecordToFirestore =
async (data) => {

    await db
    .collection("broilerRecords")
    .add(data);

};

exports.saveSaleToFirestore =
async (data) => {

    await db
    .collection("broilerSales")
    .add(data);

};

exports.saveExpenseToFirestore =
async (data) => {

    await db
    .collection("broilerExpenses")
    .add(data);

};