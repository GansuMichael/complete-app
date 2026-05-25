import {

    broilerSales,
    broilerExpenses

} from "./broiler.js";

let financeChart;

export function renderFinanceChart() {

    const canvas =
    document.getElementById(
        "financeChart"
    );

    if (!canvas) return;

    const ctx =
    canvas.getContext("2d");

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

    if (financeChart)
    financeChart.destroy();

    financeChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: [

                "Sales",
                "Expenses",
                "Profit"

            ],

            datasets: [{

                label: "Finance",

                data: [

                    totalSales,
                    totalExpenses,
                    profit

                ]

            }]
        }
    });
}