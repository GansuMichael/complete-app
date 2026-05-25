const {

    saveProductionToFirestore,
    getProductionsFromFirestore

} = require(
    "../services/layersService"
);

exports.createProduction =
async (req, res) => {

    try {

        await saveProductionToFirestore(
            req.body
        );

        res.status(201).json({

            success: true

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};

exports.getProductions =
async (req, res) => {

    try {

        const data =
        await getProductionsFromFirestore();

        res.json(data);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};