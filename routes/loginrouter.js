const express = require("express")
const router = express.Router();
const {getLogin,loginuser} = require("../controllers/loginController")

router.route("/")
.get(getLogin)
.post(loginuser);

module.exports = router;