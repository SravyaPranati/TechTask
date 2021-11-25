const express = require("express");
const {authUser }= require("../controllers/userController");
const {registerUser} = require("../controllers/userController");

const {protect} = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);


module.exports =  router ;
