import {

    broilerRecords

} from "./broiler.js";

import { getEl } from "./helpers.js";

export function generateBroilerAI() {

    const totalMort =
    broilerRecords.reduce(

        (a, b) => a + b.mortality,

        0

    );

    let advice = "";

    if (totalMort > 10) {

        advice =
        "⚠️ Mortality is high.";

    } else {

        advice =
        "✅ Mortality is stable.";

    }

    getEl("ai").innerHTML =
    advice;
}