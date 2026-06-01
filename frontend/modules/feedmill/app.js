import { openDB } from "../../indexeddb.js";

import {
    renderFormula
} from "./formula.js";

import { renderInventory } from "./renderInventory.js";

window.addEventListener("DOMContentLoaded", async () => {

    await openDB(FeedmillDB);

    renderFormula();

    renderInventory();

});
