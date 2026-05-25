const transporter =
require("../config/mailer");

exports.sendVerificationEmail =
async (email, token) => {

    const link =

    `http://localhost:5000/api/auth/verify/${token}`;

    await transporter.sendMail({

        from:process.env.EMAIL_USER,

        to:email,

        subject:"Verify Email",

        html:`
        <h2>Email Verification</h2>

        <a href="${link}">
        Verify Account
        </a>
        `

    });

};