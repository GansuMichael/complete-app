import { getData } from "../../indexeddb.js";

export async function renderInventory() {

try {

    const inventory =
        await getData(
            "FeedmillDB",
            "inventory"
        );

    const tableBody =
        document.getElementById(
            "inventoryTable"
        );

    tableBody.innerHTML = "";

    if (
        !inventory ||
        inventory.length === 0
    ) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="7">
                    No inventory found
                </td>
            </tr>
        `;

        return;
    }

    inventory.forEach(item => {

        const row =
            document.createElement(
                "tr"
            );

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.ingredientName || ""}</td>
            <td>${item.quantity || 0}</td>
            <td>${item.unit || ""}</td>
            <td>${item.unitCost || 0}</td>
            <td>${item.minimumLevel || 0}</td>
            <td>
                <button
                    class="btn-edit"
                    data-id="${item.id}"
                >
                    Edit
                </button>

                <button
                    class="btn-delete"
                    data-id="${item.id}"
                >
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(
            row
        );

    });

} catch (error) {

    console.error(
        "Render inventory error:",
        error
    );

}

}
