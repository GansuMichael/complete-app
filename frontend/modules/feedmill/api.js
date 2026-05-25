const BASE_URL =
"http://localhost:5000/api";

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