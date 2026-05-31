import {

    addData,
    getData

} from "../../indexeddb.js";

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

    await addData(
        "FarmDB",
        "activities",
        activityRecord
    );

    const broiler =
    await getData("broilerRecords");

    const layers =
    await getData("layersData");

    const sales =
    await getData("broilerSales");

    const expenses =
    await getData("broilerExpenses");

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