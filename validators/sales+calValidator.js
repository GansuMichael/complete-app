function validateSale(data){

    if(!data.customer){
       return "Customer required";
    }
 
    if(!data.quantity){
       return "Quantity required";
    }
 
    if(!data.unitPrice){
       return "Unit price required";
    }
 
    return null;
 }
 
 module.exports =
 validateSale;