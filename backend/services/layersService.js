const db =
require("../config/firebase");

exports.saveProductionToFirestore =
async (data) => {

    await db
    .collection("layersProduction")
    .add(data);

};

exports.getProductionsFromFirestore =
async () => {

    const snapshot =
    await db
    .collection("layersProduction")
    .get();

    return snapshot.docs.map(doc => ({

        id: doc.id,

        ...doc.data()

    }));

};