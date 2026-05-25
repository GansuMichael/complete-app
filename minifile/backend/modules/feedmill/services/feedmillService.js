const db =
require("../../../config/firebase");

async function saveFeedmill(data){

   let bagsProduced =
      Number(data.bagsProduced);

   let costPerBag =
      Number(data.costPerBag);

   let totalCost =
      bagsProduced * costPerBag;

   let feedmill = {

      feedType:
      data.feedType,

      bagsProduced,

      costPerBag,

      totalCost,

      createdAt:
      new Date()
   };

   await db.collection("feedmill")
   .add(feedmill);
}

module.exports = {
   saveFeedmill
};