const {

    calculateDashboardSummary

} = require(
    "../services/dashboardService"
);

exports.getDashboardSummary =
async (req, res) => {

    try {

        const summary =
        await calculateDashboardSummary();

        res.json(summary);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};