import { initDB } from "./db/indexeddb.js";

import { initBroiler } from "./modules/broiler/broiler.js";

window.addEventListener("DOMContentLoaded", async () => {

    await initDB();

    initBroiler();

});