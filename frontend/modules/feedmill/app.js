import { initDB } from "./indexeddb.js";

import {
    renderFormula
} from "./formula.js";

import {
    renderInventory
} from "./inventory.js";

window.addEventListener("DOMContentLoaded", async () => {

    await initDB();

    renderFormula();

    renderInventory();

});