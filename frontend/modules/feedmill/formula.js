import { openDB, addData } from "../../indexeddb.js";

import { saveFormula } from "./api.js";

const DB_NAME = "FeedmillDB";
const STORE_NAME = "formula";

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

export async function renderFormula() {

    const tableBody = document.getElementById("formulaTableBody");

    if (!tableBody) return;

    tableBody.innerHTML = `
        <tr>
            <td colspan="8">Loading...</td>
        </tr>
    `;

    try {

        const db = await openDB(DB_NAME);

        const transaction = db.transaction(STORE_NAME, "readonly");

        const store = transaction.objectStore(STORE_NAME);

        const request = store.getAll();

        request.onsuccess = () => {

            const formulas = request.result;

            if (formulas.length === 0) {

                tableBody.innerHTML = `
                    <tr>
                        <td colspan="8">No formula found</td>
                    </tr>
                `;

                return;
            }

            tableBody.innerHTML = "";

            formulas.forEach(formula => {

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${formula.id || ""}</td>
                    <td>${formula.feedType || ""}</td>
                    <td>${formula.totalWeight || 0}</td>
                    <td>${formula.totalCost || 0}</td>
                    <td>${formula.protein || 0}%</td>
                    <td>${formula.energy || 0}</td>
                    <td>${formula.date || ""}</td>
                    <td>
                        <button 
                            class="edit-btn"
                            data-id="${formula.id}">
                            Edit
                        </button>

                        <button 
                            class="delete-btn"
                            data-id="${formula.id}">
                            Delete
                        </button>
                    </td>
                `;

                tableBody.appendChild(row);

            });

            attachFormulaEvents();

        };

    } catch (error) {

        console.error("Render Formula Error:", error);

        tableBody.innerHTML = `
            <tr>
                <td colspan="8">
                    Error loading formulas
                </td>
            </tr>
        `;
    }
}

function attachFormulaEvents() {

    document.querySelectorAll(".delete-btn")
        .forEach(button => {

            button.addEventListener("click", async () => {

                const id = Number(button.dataset.id);

                if (!confirm("Delete this formula?")) return;

                const db = await openDB(DB_NAME);

                const tx = db.transaction(STORE_NAME, "readwrite");

                const store = tx.objectStore(STORE_NAME);

                store.delete(id);

                tx.oncomplete = () => {

                    renderFormula();

                };

            });

        });

    document.querySelectorAll(".edit-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id = Number(button.dataset.id);

                editFormula(id);

            });

        });

}

function editFormula(id) {

    console.log("Editing Formula:", id);

    // Open edit modal or form

}

// saveFormula.js

export async function saveFormula(formulaData) {

    const db = await openDB("FeedmillDB");

    const tx = db.transaction("formula", "readwrite");

    const store = tx.objectStore("formula");

    await store.add({
        id: Date.now(),
        ...formulaData,
        createdAt: new Date().toISOString()
    });

    return tx.complete;
}

// editFormula.js

export async function editFormula(id, updatedData) {

    const db = await openDB("FeedmillDB");

    const tx = db.transaction("formula", "readwrite");

    const store = tx.objectStore("formula");

    const request = store.get(id);

    request.onsuccess = () => {

        const formula = request.result;

        const updatedFormula = {
            ...formula,
            ...updatedData,
            updatedAt: new Date().toISOString()
        };

        store.put(updatedFormula);
    };
}

// deleteFormula.js

export async function deleteFormula(id) {

    const db = await openDB("FeedmillDB");

    const tx = db.transaction("formula", "readwrite");

    const store = tx.objectStore("formula");

    store.delete(id);

    return tx.complete;
}

// calculateFormula.js

export function calculateFormula(ingredients) {

    let totalWeight = 0;
    let totalCost = 0;

    let protein = 0;
    let energy = 0;
    let fibre = 0;

    ingredients.forEach(item => {

        totalWeight += item.quantity;

        totalCost += item.quantity * item.unitCost;

        protein += item.quantity * item.protein;

        energy += item.quantity * item.energy;

        fibre += item.quantity * item.fibre;
    });

    return {

        totalWeight,

        totalCost,

        protein: protein / totalWeight,

        energy: energy / totalWeight,

        fibre: fibre / totalWeight

    };
}

// formulaDashboard.js

export async function updateFormulaDashboard() {

    const db = await openDB("FeedmillDB");

    const tx = db.transaction("formula", "readonly");

    const store = tx.objectStore("formula");

    const request = store.getAll();

    request.onsuccess = () => {

        const formulas = request.result;

        document.getElementById("formulaCount").textContent =
            formulas.length;

        const totalCost = formulas.reduce(
            (sum, f) => sum + Number(f.totalCost || 0),
            0
        );

        document.getElementById("totalFormulaCost")
            .textContent = totalCost.toLocaleString();
    };
}

// printFormula.js

export function printFormula(formula) {

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`

        <html>

        <head>

            <title>Feed Formula</title>

        </head>

        <body>

            <h2>${formula.feedType}</h2>

            <p>Total Weight: ${formula.totalWeight}</p>

            <p>Total Cost: ${formula.totalCost}</p>

            <p>Protein: ${formula.protein}%</p>

            <p>Energy: ${formula.energy}</p>

            <p>Fibre: ${formula.fibre}%</p>

        </body>

        </html>

    `);

    printWindow.document.close();

    printWindow.print();
}

// exportFormulaPDF.js

export async function exportFormulaPDF(formula) {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text("Feed Formula Report", 20, 20);

    doc.setFontSize(12);

    doc.text(
        `Feed Type: ${formula.feedType}`,
        20,
        40
    );

    doc.text(
        `Total Weight: ${formula.totalWeight} kg`,
        20,
        50
    );

    doc.text(
        `Total Cost: ${formula.totalCost}`,
        20,
        60
    );

    doc.text(
        `Protein: ${formula.protein}%`,
        20,
        70
    );

    doc.text(
        `Energy: ${formula.energy}`,
        20,
        80
    );

    doc.text(
        `Fibre: ${formula.fibre}%`,
        20,
        90
    );

    doc.save("FeedFormulaReport.pdf");
}

