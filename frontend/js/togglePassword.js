const password =
document.getElementById("password");

const toggle =
document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    const type =
    password.getAttribute("type") === "password"
    ? "text"
    : "password";

    password.setAttribute("type", type);

});