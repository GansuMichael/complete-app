import {
    addData,
    getAllData
} from "../../db/indexeddb.js";

import {
    saveProduction
} from "../../api/layersApi.js";

import {
    getEl,
    getNumber
} from "../../utils/helpers.js";

import {
    renderLayers
} from "./layersRender.js";

let layersData = [];

export async function initLayers() {

    layersData =
    await getAllData("layersProduction");

    renderLayers(layersData);
}

export async function addProduction() {

    const date =
    getEl("pDate").value;

    if (!date) {

        alert("Please select date");

        return;
    }

    const data = {

        date,

        birds:
        getNumber("birds"),

        eggs:
        getNumber("eggs"),

        cracked:
        getNumber("cracked"),

        mortality:
        getNumber("layersMortality"),

        feed:
        getNumber("layersFeed"),

        feedCost:
        getNumber("layersFeedCost"),

        price:
        getNumber("price")

    };

    // Calculations
    data.good =
    data.eggs - data.cracked;

    data.revenue =
    data.good * data.price;

    data.profit =
    data.revenue - data.feedCost;

    data.expenses =
    data.feedCost;

    data.closing =
    data.birds - data.mortality;

    // SAVE OFFLINE
    await addData(
        "layersProduction",
        data
    );

    // SAVE ONLINE
    await saveProduction(data);

    // UPDATE MEMORY
    layersData.push(data);

    renderLayers(layersData);
}