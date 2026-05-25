const db =
require("../../../config/firebase");

async function saveLayers(data){

   let bagsProduced =
      Number(data.bagsProduced);

   let costPerBag =
      Number(data.costPerBag);

   let totalCost =
      bagsProduced * costPerBag;

   let layers = {

      feedType:
      data.feedType,

      bagsProduced,

      costPerBag,

      totalCost,

      createdAt:
      new Date()
   };

   await db.collection("layers")
   .add(layers);
}

module.exports = {
   saveLayers
};