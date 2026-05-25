
router.get(

    "/users",

    verifyToken,

    isAdmin,

    getAllUsers

);