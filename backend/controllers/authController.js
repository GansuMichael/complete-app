const {

    registerUser,
    loginUser

} = require(
    "../services/authService"
);

exports.register =
async (req, res) => {

    try {

        const user =
        await registerUser(
            req.body
        );

        res.status(201).json({

            success: true,

            message:
            "Registration successful",

            user

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            error: error.message

        });

    }

};

exports.login =
async (req, res) => {

    try {

        const result =
        await loginUser(
            req.body
        );

        res.status(200).json({

            success: true,

            token:
            result.token,

            user:
            result.user

        });

    } catch (error) {

        res.status(401).json({

            success: false,

            error:
            error.message

        });

    }

};

exports.refreshToken =
async (req, res) => {

    try {

        const token =
        req.body.refreshToken;

        const accessToken =
        await refreshUserToken(token);

        res.json({

            success:true,

            accessToken

        });

    } catch(error){

        res.status(401).json({

            error:error.message

        });

    }

};