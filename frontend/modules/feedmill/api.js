const BASE_URL =
"http://localhost:5000/api/feedmill";

export async function saveInventory(
    inventoryItem
) {

    const response = await fetch(
        `${BASE_URL}/inventoryItem`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    return response.json();
}

export async function getInventoryOnline() {

    const response = await fetch(
        `${BASE_URL}/inventory`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    return response.json();
}

export async function saveFormula(data) {

    const response = await fetch(
        `${BASE_URL}/formula`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    return response.json();
}