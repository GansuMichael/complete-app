import {

    getAllData

} from "../../db/indexeddb.js";

import {

    calculateDashboardAnalytics

} from "./dashboardAnalytics.js";

import {

    renderDashboard

} from "./dashboardRender.js";

import {

    generateDashboardAlerts

} from "./dashboardAlerts.js";

export async function initDashboard() {

    const broiler =
    await getAllData("broilerRecords");

    const layers =
    await getAllData("layersData");

    const sales =
    await getAllData("broilerSales");

    const expenses =
    await getAllData("broilerExpenses");

    const analytics =
    calculateDashboardAnalytics({

        broiler,
        layers,
        sales,
        expenses

    });

    renderDashboard(analytics);

    generateDashboardAlerts(analytics);

}