const router = require("express").Router();
const userRoutes = require("./userRoutes");
const haveRoutes = require("./haveRoutes");
const wantRoutes = require("./wantRoutes");
const emailRoutes = require("./emailRoutes")


//you need api before the routes//
//you need this because of the outside index file//
///api/users => userRoutes
router.use("/users", userRoutes);
router.use("/haves", haveRoutes);
router.use("/wants", wantRoutes);
router.use("/email", emailRoutes);

module.exports = router;
