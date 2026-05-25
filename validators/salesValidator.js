function validateSale(data){

    if(!data.customer){
       return "Customer name required";
    }
 
    if(!data.quantity){
       return "Quantity required";
    }
 
    return null;
 }
 
 module.exports = validateSale;