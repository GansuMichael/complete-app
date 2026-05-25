async function saveSale(){

    let customer =
       document.getElementById("customer").value;
 
    let quantity =
       document.getElementById("quantity").value;
 
    let saleData = {
       customer,
       quantity
    };
 
    try{
 
       let response = await fetch(
          "http://localhost:3000/sales",
          {
             method: "POST",
 
             headers: {
                "Content-Type": "application/json"
             },
 
             body: JSON.stringify(saleData)
          }
       );
 
       let result =
          await response.json();
 
       document.getElementById("message")
          .innerText = result.message;
 
    }catch(error){
 
       console.log(error);
 
       document.getElementById("message")
          .innerText = "Error saving sale";
    }
 }