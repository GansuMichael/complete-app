import {
    getEl,
    formatNumber
} from "../../utils/helpers.js";

export function updateAnalytics(data) {

    let totalBirds = 0;

    let totalEggs = 0;

    let totalProfit = 0;

    data.forEach(item => {

        totalBirds += item.birds;

        totalEggs += item.eggs;

        totalProfit += item.profit;

    });

    getEl("eggPercent").innerText =
    formatNumber(

        totalBirds
        ? (totalEggs / totalBirds) * 100
        : 0

    );

    getEl("profitPerBird").innerText =
    formatNumber(

        totalBirds
        ? totalProfit / totalBirds
        : 0

    );
}