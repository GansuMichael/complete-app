export function calculateDashboardAnalytics(data) {

    const {

        broiler,
        layers,
        sales,
        expenses

    } = data;

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

}