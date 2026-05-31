import { openDB } from "../../indexeddb.js";

import {
    initDashboard
} from "./dashboard.js";

window.addEventListener("DOMContentLoaded", async () => {

    await openDB(FarmDB);

    initDashboard();

});