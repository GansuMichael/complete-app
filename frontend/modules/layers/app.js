import { openDB } from "../../indexeddb.js";

import { initLayers } from "./layers.js";

window.addEventListener("DOMContentLoaded", async () => {

    await openDB(PoultryDB);

    initLayers();

});