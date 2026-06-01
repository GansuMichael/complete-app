const form =
document.getElementById(
"registerForm"
);

form.addEventListener(
"submit",
async (e) => {

    e.preventDefault();

    const user = {

        name:
            document.getElementById(
                "name"
            ).value,

        email:
            document.getElementById(
                "email"
            ).value,

        password:
            document.getElementById(
                "password"
            ).value

    };

    try {

        console.log(
            "Saving locally..."
        );

        await saveUserOffline(
            user
        );

        console.log(
            "Sending to server..."
        );

        const result =
            await registerUser(
                user
            );

        alert(
            result.message
        );

        window.location.href =
            "./login.html";

    } catch (error) {

        console.error(
            error
        );

        alert(
            error.message
        );

    }

}

);
