const db =
require("../config/firebase");

exports.calculateDashboardSummary =
async () => {

    const broilerSnapshot =
    await db
    .collection("broilerRecords")
    .get();

    const layersSnapshot =
    await db
    .collection("layersProduction")
    .get();

    const salesSnapshot =
    await db
    .collection("broilerSales")
    .get();

    const expensesSnapshot =
    await db
    .collection("broilerExpenses")
    .get();

    const broiler =
    broilerSnapshot.docs.map(doc => doc.data());

    const layers =
    layersSnapshot.docs.map(doc => doc.data());

    const sales =
    salesSnapshot.docs.map(doc => doc.data());

    const expenses =
    expensesSnapshot.docs.map(doc => doc.data());

    const totalBirds =
    broiler.reduce(
        (a, b) => a + b.closing,
        0
    );

    const totalEggs =
    layers.reduce(
        (a, b) => a + b.eggs,
        0
    );

    const totalFeed =
    broiler.reduce(
        (a, b) => a + b.feed,
        0
    )

    +

    layers.reduce(
        (a, b) => a + b.feed,
        0
    );

    const totalMortality =
    broiler.reduce(
        (a, b) => a + b.mortality,
        0
    )

    +

    layers.reduce(
        (a, b) => a + b.mortality,
        0
    );

    const totalRevenue =
    sales.reduce(
        (a, b) => a + b.amount,
        0
    )

    +

    layers.reduce(
        (a, b) => a + b.revenue,
        0
    );

    const totalExpenses =
    expenses.reduce(
        (a, b) => a + b.amount,
        0
    );

    const profit =
    totalRevenue - totalExpenses;

    return {

        totalBirds,
        totalEggs,
        totalFeed,
        totalMortality,
        totalRevenue,
        totalExpenses,
        profit

    };

};