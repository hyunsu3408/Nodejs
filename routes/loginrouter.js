const express = require("express")
const router = express.Router();
const {getLogin,loginuser
    ,getRegister,registerUser} = require("../controllers/loginController")


router.route("/")
.get(getLogin)
.post(loginuser);

router.route("/register")
.get(getRegister)
.post(registerUser);

module.exports = router;