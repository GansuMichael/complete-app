import { initDB } from "./db/indexeddb.js";

import { initLayers } from "./modules/layers/layers.js";

window.addEventListener("DOMContentLoaded", async () => {

    await initDB();

    initLayers();

});