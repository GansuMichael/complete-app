import {

    getEl,
    formatNumber

} from "./helpers.js";

export function renderDashboard(data) {

    getEl("mTotalBirds").innerText =

    formatNumber(data.totalBirds);

    getEl("mTotalEggs").innerText =

    formatNumber(data.totalEggs);

    getEl("mTotalFeed").innerText =

    formatNumber(data.totalFeed);

    getEl("mTotalMortality").innerText =

    formatNumber(data.totalMortality);

    getEl("mRevenue").innerText =

    formatNumber(data.totalRevenue);

    getEl("mExpenses").innerText =

    formatNumber(data.totalExpenses);

    getEl("mProfit").innerText =

    formatNumber(data.profit);

}