const express = require('express')
const router = express.Router();
const {
    getUserById,
    getUser,
    updateUser,
    userPurchaseList
} = require('../controllers/user');

const { isSignedIn,isAuthenticated,isAdmin }= require("../controllers/auth");
router.param("userId",getUserById);

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.put("/user/:userId",isSignedIn,isAuthenticate,updateUser);


router.get("/orderrs/user/:userId",
isSignedIn,
isAuthenticated,
userPurchaseList);
// router.get('/',user.getUser)
// router.post('/',user.userSignup);
// router.get('/',user.getUserById)
module.exports = router;