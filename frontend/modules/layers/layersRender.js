import {
    getEl,
    formatNumber
} from "../../utils/helpers.js";

import {
    drawLayersCharts
} from "./layersCharts.js";

import {
    updateAnalytics
} from "./layersAnalytics.js";

export function renderLayers(data = []) {

    const table =
    getEl("prodTable");

    let eggs = 0;

    let revenue = 0;

    let profit = 0;

    let html = "";

    data.forEach(item => {

        eggs += item.eggs;

        revenue += item.revenue;

        profit += item.profit;

        html += `
        <tr>
            <td>${item.date}</td>
            <td>${formatNumber(item.eggs)}</td>
            <td>${formatNumber(item.good)}</td>
            <td>${formatNumber(item.revenue)}</td>
            <td>${formatNumber(item.profit)}</td>
            <td>${formatNumber(item.closing)}</td>
        </tr>
        `;
    });

    table.innerHTML = html;

    getEl("dEggs").innerText =
    formatNumber(eggs);

    getEl("dRevenue").innerText =
    formatNumber(revenue);

    getEl("dProfit").innerText =
    formatNumber(profit);

    drawLayersCharts(data);

    updateAnalytics(data);
}