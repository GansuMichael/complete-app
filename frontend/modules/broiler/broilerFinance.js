import {

    broilerRecords,
    broilerSales,
    broilerExpenses

} from "./broiler.js";

import {

    getEl,
    formatNumber

} from "./helpers.js";

export function calculateFCR() {

    const totalFeed =
    broilerRecords.reduce(

        (a, b) => a + b.feed,

        0

    );

    const last =
    broilerRecords[
        broilerRecords.length - 1
    ];

    if (!last) {

        getEl("fcr").innerText = "0";

        return;
    }

    const fcr =
    totalFeed /
    (last.weight * last.closing);

    getEl("fcr").innerText =
    fcr.toFixed(2);
}

export function calculateProfit() {

    const totalSales =
    broilerSales.reduce(

        (a, b) => a + b.amount,

        0

    );

    const totalExpenses =
    broilerExpenses.reduce(

        (a, b) => a + b.amount,

        0

    );

    const profit =
    totalSales - totalExpenses;

    getEl("profit").innerText =
    formatNumber(profit);

}