import { initDashboard } from "./dashboard.js";

export async function resetMasterDashboard() {

    const confirmReset =

    confirm(
        "Reset entire dashboard?"
    );

    if (!confirmReset) return;

    indexedDB.deleteDatabase("FarmDB");

    location.reload();

}