import {

    addData,
    getData

} from "../../indexeddb.js";

import {

    saveRecord,
    saveSale,
    saveExpense

} from "./broilerApi.js";

import {

    renderBroiler,
    renderSales,
    renderExpenses

} from "./broilerRender.js";

import { getEl } from "./helpers.js";

export let broilerRecords = [];

export let broilerSales = [];

export let broilerExpenses = [];

export async function initBroiler() {

    broilerRecords =
    await getData("broilerRecords");

    broilerSales =
    await getData("broilerSales");

    broilerExpenses =
    await getData("broilerExpenses");

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
        "BroilerDB",
        "birds",
        birdRecord
    );    

    // FIRESTORE SAVE
    await saveRecord(record);

    broilerRecords.push(record);

    renderBroiler();
}