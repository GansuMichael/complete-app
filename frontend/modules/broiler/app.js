import { openDB } from "../../indexeddb.js";

import { initBroiler } from "./broiler.js";

window.addEventListener("DOMContentLoaded", async () => {

    await openDB(BroilerDB);

    initBroiler();

});