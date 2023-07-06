const router = require("express").Router();
const verifyUser = require("../middleware/verifyUser");
const {register, login, logout,getUser} = require("../controller/userController");

router.post("/register", register)
router.post("/login", login)
// router.post("/logout",logout)
router.get("/getUser",verifyUser, getUser)


module.exports = router;