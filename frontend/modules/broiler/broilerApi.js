const BASE_URL =
"http://localhost:5000/api/broiler";

export async function saveRecord(data) {

    const response = await fetch(

        `${BASE_URL}/record`,

        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"

            },

            body: JSON.stringify(data)

        }

    );

    return response.json();
}

export async function saveSale(data) {

    const response = await fetch(

        `${BASE_URL}/sale`,

        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"

            },

            body: JSON.stringify(data)

        }

    );

    return response.json();
}

export async function saveExpense(data) {

    const response = await fetch(

        `${BASE_URL}/expense`,

        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"

            },

            body: JSON.stringify(data)

        }

    );

    return response.json();
}