const BASE_URL =
"http://localhost:5000/api/layers";

export async function saveProduction(data) {

    const response = await fetch(BASE_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    return response.json();
}

export async function getProductions() {

    const response =
    await fetch(BASE_URL);

    return response.json();
}