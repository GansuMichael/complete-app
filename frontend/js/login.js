document
.getElementById("loginForm")

.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        email:
        document.getElementById(
            "loginEmail"
        ).value,

        password:
        document.getElementById(
            "loginPassword"
        ).value

    };

    const response =
    await fetch(

        "http://localhost:5000/api/auth/login",

        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"

            },

            body:
            JSON.stringify(data)

        }

    );

    const result =
    await response.json();

    if (result.success) {

        // SAVE TOKEN
        localStorage.setItem(

            "token",

            result.token

        );

        // SAVE USER
        localStorage.setItem(

            "user",

            JSON.stringify(
                result.user
            )

        );

        window.location.href =
        "../dashboard.html";

    } else {

        alert(result.error);

    }

});