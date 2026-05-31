import { addData } from "../../indexeddb.js";

import { saveFormula } from "./api.js";

export async function addIngredient() {

    const ingredient = {

        name:
        document.getElementById("ingredient").value,

        qty:
        Number(document.getElementById("qty").value)

    };

    // SAVE OFFLINE
    await addData("formula", ingredient);

        // SAVE ONLINE
    if (navigator.onLine) {
        await saveFormula(ingredient);
    }

    renderFormula();
}

export function renderFormula() {

    console.log("Rendering formula");

}