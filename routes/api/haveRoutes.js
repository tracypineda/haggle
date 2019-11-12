const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const havesController = require("../../controller/havesController");


// /api/haves/all
// get all haves from the signed in user
router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Have.find({ author: req.user.id }, (err, haves) => {
        res.json(haves);
    });
});

// /api/haves/new
// add new have, update the user to have have id
router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
    const newHave = new db.Have({
        user: req.user._id,
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription
    });

    newHave.save((err, newHave) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(req.user.id, { $push: { haves: newHave._id } }, (err, user) => {
            if (err) throw err;
            res.send(newHave);
        });
    });
});

// /api/haves/remove
// removed have based on id, updates user
router.delete("/remove", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Have.findByIdAndDelete(req.body.id, (err, have) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(have._id, { $pull: { 'haves': have._id } }, { new: true }, (err, user) => {
            if (err) throw err;
            res.send(user);
        });
    });
});

// /api/haves/update
// update a have based on id
router.put("/update", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Have.findByIdAndUpdate(req.body.id, { have: req.body.have }, { new: true }, (err, have) => {
        if (err) throw err;
        res.json(have);
    });
});
// matches with "/api/haves"
router.route("/")
.get(havesController.findAll);


module.exports = router;