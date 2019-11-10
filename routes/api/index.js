const router = require("express").Router();
const userRoutes = require("./userRoutes");
const haveRoutes = require("./haveRoutes");
const wantRoutes = require("./wantRoutes");



router.use("/users", userRoutes);
router.use("/haves", haveRoutes);
router.use("/wants", wantRoutes);

module.exports = router;
