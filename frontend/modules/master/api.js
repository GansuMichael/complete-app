import { initDB } from "./db/indexeddb.js";

import {
    initDashboard
} from "./modules/dashboard/dashboard.js";

window.addEventListener("DOMContentLoaded", async () => {

    await initDB();

    initDashboard();

});