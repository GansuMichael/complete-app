const {
    saveFormulaToFirestore
} = require(
    "../services/firestoreService"
);

exports.saveFormula =
async (req, res) => {

    try {

        const formula =
        req.body;

        await saveFormulaToFirestore(
            formula
        );

        res.status(200).json({

            success: true,
            message: "Formula saved"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            error: error.message

        });

    }

};