// inventory.js

import { addData, getData } from "../../indexeddb.js";
import {
    saveInventory,
    getInventoryOnline
} from "./api.js";

// ADD INVENTORY ITEM
export async function addInventory() {

    const inventoryItem = {

        ingredient:
            document.getElementById("ingredientName").value,

        quantity:
            Number(
                document.getElementById("quantity").value
            ),

        unit:
            document.getElementById("unit").value,

        unitCost:
            Number(
                document.getElementById("unitCost").value
            ),

        minimumLevel:
            Number(
                document.getElementById("minimumLevel").value
            ),

        createdAt:
            new Date().toISOString()
    };

    // SAVE OFFLINE
    await addData(
        "FeedmillDB",
        "inventory",
        inventoryItem
    );

    const inventory =
    await getData(
        "FeedmillDB",
        "inventory"
    );

    
    // SAVE ONLINE
    await saveInventory(inventoryItem);

    renderInventory();
}




// DISPLAY INVENTORY
export async function renderInventory() {

    const inventory =
        await getData("inventory");

    const tbody =
        document.getElementById(
            "inventoryTable"
        );

    tbody.innerHTML = "";

    inventory.forEach(item => {

        tbody.innerHTML += `
            <tr>
                <td>${item.ingredient}</td>
                <td>${item.quantity}</td>
                <td>${item.unit}</td>
                <td>${item.unitCost}</td>
                <td>${item.minimumLevel}</td>
            </tr>
        `;
    });
}

// STOCK DEDUCTION
export async function useIngredient(
    ingredientName,
    qtyUsed
) {

    const inventory =
        await getData("inventory");

    const item =
        inventory.find(
            x =>
                x.ingredient ===
                ingredientName
        );

    if (!item) return;

    item.quantity -= qtyUsed;

    await addData(
        "inventory",
        item
    );

    renderInventory();
}

// LOW STOCK CHECK
export async function checkLowStock() {

    const inventory =
        await getData("inventory");

    return inventory.filter(
        item =>
            item.quantity <=
            item.minimumLevel
    );
}

// INVENTORY VALUE
export async function calculateInventoryValue() {

    const inventory =
        await getData("inventory");

    return inventory.reduce(
        (total, item) =>
            total +
            (
                item.quantity *
                item.unitCost
            ),
        0
    );
}