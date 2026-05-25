const db =
require("../config/firebase");

const {

    hashPassword,
    comparePassword

} = require("../utils/hash");

const {

    generateToken

} = require("../utils/token");

exports.registerUser =
async (user) => {

    // CHECK EXISTING USER
    const existing =
    await db
    .collection("users")
    .where("email", "==", user.email)
    .get();

    if (!existing.empty) {

        throw new Error(
            "Email already exists"
        );

    }

    // HASH PASSWORD
    const hashedPassword =
    await hashPassword(
        user.password
    );

    const newUser = {

        name:
        user.name,

        email:
        user.email,

        password:
        hashedPassword,

        role:
        "user",

        createdAt:
        new Date()

    };

    const docRef =
    await db
    .collection("users")
    .add(newUser);

    return {

        id: docRef.id,

        ...newUser

    };

};

exports.loginUser =
async (data) => {

    const snapshot =
    await db
    .collection("users")
    .where("email", "==", data.email)
    .get();

    if (snapshot.empty) {

        throw new Error(
            "Invalid email"
        );

    }

    const userDoc =
    snapshot.docs[0];

    const user =
    {

        id: userDoc.id,

        ...userDoc.data()

    };

    // COMPARE PASSWORD
    const isMatch =
    await comparePassword(

        data.password,

        user.password

    );

    if (!isMatch) {

        throw new Error(
            "Invalid password"
        );

    }

    // GENERATE TOKEN
    const token =
    generateToken(user);

    return {

        token,

        user: {

            id: user.id,

            name: user.name,

            email: user.email,

            role: user.role

        }

    };

};

exports.logoutUser =
async (userId) => {

    const snapshot =
    await db
    .collection("refreshTokens")
    .where("userId","==",userId)
    .get();

    snapshot.forEach(doc => {

        doc.ref.delete();

    });

};