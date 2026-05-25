const params =
new URLSearchParams(
   window.location.search
);

const token =
params.get("token");

const resetForm =
document.getElementById(
   "resetForm"
);

resetForm.addEventListener(

   "submit",

   async (e) => {

      e.preventDefault();

      const password =
      document.getElementById(
         "password"
      ).value;

      const response =
      await fetch(

         "http://localhost:5000/api/auth/reset-password",

         {

            method: "POST",

            headers: {

               "Content-Type":
               "application/json"

            },

            body: JSON.stringify({

               token,
               password

            })

         }

      );

      const data =
      await response.json();

      alert(data.message);

      window.location.href =
      "./login.html";

   }

);