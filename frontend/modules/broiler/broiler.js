import {

    addData,
    getAllData

} from "../../db/indexeddb.js";

import {

    saveRecord,
    saveSale,
    saveExpense

} from "../../api/broilerApi.js";

import {

    renderBroiler,
    renderSales,
    renderExpenses

} from "./broilerRender.js";

import { getEl } from "../../utils/helpers.js";

export let broilerRecords = [];

export let broilerSales = [];

export let broilerExpenses = [];

export async function initBroiler() {

    broilerRecords =
    await getAllData("broilerRecords");

    broilerSales =
    await getAllData("broilerSales");

    broilerExpenses =
    await getAllData("broilerExpenses");

    renderBroiler();

    renderSales();

    renderExpenses();
}

export async function addRecord() {

    const record = {

        date:
        getEl("date").value,

        age:
        Number(getEl("age").value),

        opening:
        Number(getEl("opening").value),

        feed:
        Number(getEl("feed").value),

        water:
        Number(getEl("water").value),

        medication:
        getEl("medication").value,

        weight:
        Number(getEl("weight").value),

        mortality:
        Number(getEl("mortality").value),

        remarks:
        getEl("remarks").value

    };

    record.closing =
    record.opening -
    record.mortality;

    // OFFLINE SAVE
    await addData(
        "broilerRecords",
        record
    );

    // FIRESTORE SAVE
    await saveRecord(record);

    broilerRecords.push(record);

    renderBroiler();
}