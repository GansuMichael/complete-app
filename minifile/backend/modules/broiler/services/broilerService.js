const db =
require("../../../config/firebase");

async function saveBroiler(data){

   let bagsProduced =
      Number(data.bagsProduced);

   let costPerBag =
      Number(data.costPerBag);

   let totalCost =
      bagsProduced * costPerBag;

   let broiler = {

      feedType:
      data.feedType,

      bagsProduced,

      costPerBag,

      totalCost,

      createdAt:
      new Date()
   };

   await db.collection("broiler")
   .add(broiler);
}

module.exports = {
   saveBroiler
};