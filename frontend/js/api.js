const BASE_URL =
"http://localhost:5000/api/auth";

async function registerUser(data) {

    const response =
    await fetch(

        `${BASE_URL}/register`,

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        }

    );

    return response.json();
}