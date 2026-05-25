const params =
new URLSearchParams(
   window.location.search
);

const reference =
params.get("reference");

verifyPayment(reference);

async function verifyPayment(
   reference
){

   const token =
   localStorage.getItem(
      "token"
   );

   const response =
   await fetch(

      `http://localhost:5000/api/payment/verify/${reference}`,

      {

         headers: {

            Authorization:
            token

         }

      }

   );

   const data =
   await response.json();

   alert(data.message);

   // UPDATE LOCAL SUBSCRIPTION

   localStorage.setItem(

      "subscription",

      JSON.stringify({

         plan: "premium",

         status: "active"

      })

   );

   window.location.href =
   "./dashboard.html";

}