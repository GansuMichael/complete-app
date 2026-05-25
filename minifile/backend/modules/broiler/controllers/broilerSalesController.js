const {
    saveSale
 } = require(
    "../modules/broiler/services/broilerSalesService"
 );
 
 
 
 async function createSale(req, res){
 
    // GET DATA FROM FRONTEND
 
    let saleData =
       req.body;
 
 
    // SEND TO SERVICE LAYER
 
    await saveSale(saleData);
 
 
    // SEND RESPONSE BACK
 
    res.json({
       message:
       "Sale saved"
    });
 }
 
 
 module.exports = {
    createSale
 };