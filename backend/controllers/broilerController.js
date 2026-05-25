const {

    saveRecordToFirestore,
    saveSaleToFirestore,
    saveExpenseToFirestore

} = require(
    "../services/broilerService"
);

exports.addRecord =
async (req, res) => {

    try {

        await saveRecordToFirestore(
            req.body
        );

        res.json({

            success: true

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};

exports.addSale =
async (req, res) => {

    try {

        await saveSaleToFirestore(
            req.body
        );

        res.json({

            success: true

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};

exports.addExpense =
async (req, res) => {

    try {

        await saveExpenseToFirestore(
            req.body
        );

        res.json({

            success: true

        });

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};