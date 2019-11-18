const router = require("express").Router();
const userRoutes = require("./userRoutes");
const haveRoutes = require("./haveRoutes");
const wantRoutes = require("./wantRoutes");
const emailRoutes = require("./emailRoutes");


// const DOCUMENT = require("../../models/Images");
// const multer = require("multer");
// const AWS = require("aws-sdk");

// var storage = multer.memoryStorage();
// var upload = multer.memoryStorage({storage: storage});

// const emailRoutes = require("./emailRoutes")

router.use("/users", userRoutes);
router.use("/haves", haveRoutes);
router.use("/wants", wantRoutes);
router.use("/", emailRoutes);
// router.use("/email", emailRoutes);

module.exports = router;
