// =========================================
// PAYSTACK CONFIGURATION
// =========================================

const PAYSTACK_PUBLIC_KEY =
   "pk_test_xxxxxxxxxxxxxxxxx";

// =========================================
// INITIALIZE PAYMENT
// =========================================

function paystackPayment(user) {

   if (!user || !user.email) {

      alert("User not logged in");

      return;
   }

   const amount = 999 * 100;

   const handler = PaystackPop.setup({

      key: PAYSTACK_PUBLIC_KEY,

      email: user.email,

      amount: amount,

      currency: "NGN",

      ref:
         "GANSU_" +
         Date.now(),

      metadata: {

         custom_fields: [

            {
                userId: user.id,
               display_name: "Full Name",
               variable_name: "full_name",
               value: user.name || "Customer"
            }

         ]

      },

      callback: async function(response) {

         console.log(
            "Payment success:",
            response.reference
         );

         await verifyPayment(
            response.reference
         );

      },

      onClose: function() {

         console.log(
            "Payment window closed"
         );

      }

   });

   handler.openIframe();
}

// =========================================
// VERIFY PAYMENT FROM BACKEND
// =========================================

async function verifyPayment(reference) {

   try {

      const token =
         localStorage.getItem("token");

      const response =
         await fetch(
            "http://localhost:5000/api/payment/verify",
            {

               method: "POST",

               headers: {

                  "Content-Type":
                     "application/json",

                  Authorization:
                     `Bearer ${token}`

               },

               body: JSON.stringify({
                  reference
               })

            }
         );

      const data =
         await response.json();

      if (data.success) {

         alert(
            "Premium activated successfully!"
         );

         localStorage.setItem(
            "subscription",
            "premium"
         );

         window.location.href =
            "./dashboard.html";

      } else {

         alert(
            "Payment verification failed"
         );

      }

   } catch (error) {

      console.error(error);

      alert(
         "Server verification failed"
      );

   }

}

// =========================================
// EXPORT
// =========================================

window.paystackPayment =
   paystackPayment;