const BASE_URL =
"http://localhost:5000/api/dashboard";

export async function getDashboardSummary() {

    const response =
    await fetch(BASE_URL);

    return response.json();
}