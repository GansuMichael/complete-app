import { getEl } from "./helpers.js";

export function generateDashboardAlerts(data) {

    let alert = "";

    if (data.profit < 0) {

        alert +=
        "❌ Business is running at loss.<br>";

    } else {

        alert +=
        "✅ Business is profitable.<br>";

    }

    if (data.totalMortality > 20) {

        alert +=
        "⚠️ Mortality is high.";

    }

    getEl("masterAlerts").innerHTML =
    alert;
}