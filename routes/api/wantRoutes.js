const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const wantsController = require("../../controller/wantsController");

// /api/wants/all
// get all wants from the signed in user
router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Want.find({ owner: req.user.id }, (err, wants) => {
        res.json(wants);
    });
});

// /api/wants/new
// add new want, update the user to want want id
router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
    const newWant = new db.Want({
        user: req.user._id,
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription,
        userName: req.body.userName,
        wantImage: req.body.wantImage
    });
    router.post(wantsController.createWants);

    newWant.save((err, newWant) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(req.user.id, { $push: { wants: newWant._id } }, (err, user) => {
            if (err) throw err;
            res.send(newWant);
        });
    });
});

// /api/wants/remove
// removed want based on id, updates user
router.delete("/remove", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Want.findByIdAndDelete(req.body.id, (err, want) => {
        if (err) throw err;
        db.User.findByIdAndUpdate(want._id, { $pull: { 'wants': want._id } }, { new: true }, (err, user) => {
            if (err) throw err;
            res.send(user);
        });
    });
});

// /api/wants/update
// update a want based on id
router.put("/update", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Want.findByIdAndUpdate(req.body.id, { want: req.body.want }, { new: true }, (err, want) => {
        if (err) throw err;
        res.json(want);
    });
});


//api/want/
router.route("/")
.get(wantsController.findAll);

router.route("/:id")
    .get(wantsController.findById)
    .put(wantsController.update)
    .delete(wantsController.remove);

module.exports = router;