import {

    broilerRecords,
    broilerSales,
    broilerExpenses

} from "./broiler.js";

import {

    formatNumber,
    getEl

} from "./helpers.js";

import {

    calculateFCR,
    calculateProfit

} from "./broilerFinance.js";

import {

    renderFinanceChart

} from "./broilerCharts.js";

import {

    generateBroilerAI

} from "./broilerAI.js";

export function renderBroiler() {

    const tbody =
    document.querySelector(
        "#table tbody"
    );

    tbody.innerHTML = "";

    let totalFeed = 0;

    let totalMort = 0;

    broilerRecords.forEach(record => {

        totalFeed += record.feed;

        totalMort += record.mortality;

        tbody.innerHTML += `
        <tr>
            <td>${record.date}</td>
            <td>${record.age}</td>
            <td>${record.opening}</td>
            <td>${record.feed}</td>
            <td>${record.weight}</td>
            <td>${record.mortality}</td>
            <td>${record.closing}</td>
        </tr>
        `;
    });

    getEl("totalFeed").innerText =
    formatNumber(totalFeed);

    getEl("totalMort").innerText =
    formatNumber(totalMort);

    calculateFCR();

    renderFinanceChart();

    generateBroilerAI();
}

export function renderSales() {

    const tbody =
    document.querySelector(
        "#salesTable tbody"
    );

    tbody.innerHTML = "";

    let total = 0;

    broilerSales.forEach(sale => {

        total += sale.amount;

        tbody.innerHTML += `
        <tr>
            <td>${sale.date}</td>
            <td>${sale.type}</td>
            <td>${sale.desc}</td>
            <td>${formatNumber(sale.amount)}</td>
        </tr>
        `;
    });

    getEl("totalSales").innerText =
    formatNumber(total);

    calculateProfit();
}

export function renderExpenses() {

    const tbody =
    document.querySelector(
        "#expenseTable tbody"
    );

    tbody.innerHTML = "";

    let total = 0;

    broilerExpenses.forEach(expense => {

        total += expense.amount;

        tbody.innerHTML += `
        <tr>
            <td>${expense.date}</td>
            <td>${expense.desc}</td>
            <td>${expense.type}</td>
            <td>${formatNumber(expense.amount)}</td>
        </tr>
        `;
    });

    getEl("totalExpenses").innerText =
    formatNumber(total);

    calculateProfit();
}