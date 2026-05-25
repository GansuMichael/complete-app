let eggChart = null;

let profitChart = null;

export function drawLayersCharts(data) {

    const eggCanvas =
    document.getElementById("eggChart");

    const profitCanvas =
    document.getElementById("profitChart");

    if (!eggCanvas || !profitCanvas)
    return;

    const labels =
    data.map(item => item.date);

    if (eggChart)
    eggChart.destroy();

    if (profitChart)
    profitChart.destroy();

    eggChart = new Chart(eggCanvas, {

        type: "line",

        data: {

            labels,

            datasets: [{

                label: "Egg Production",

                data: data.map(
                    item => item.eggs
                )

            }]
        }
    });

    profitChart =
    new Chart(profitCanvas, {

        type: "bar",

        data: {

            labels,

            datasets: [{

                label: "Profit",

                data: data.map(
                    item => item.profit
                )

            }]
        }
    });
}