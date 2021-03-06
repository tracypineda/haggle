const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Want
            .find(req.query)
            .sort({ createdAt: -1 })
            .then(dbWant => res.json(dbWant))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Want
            .findById(req.params.id)
            .then(dbWant => res.json(dbWant))
            .catch(err => res.status(422).json(err));
    },
    
  getUserWants: function (req, res) {
    
    db.Want
      .find({"user": req.user.username})
      .then(dbWant => {
        console.log("User related Wants", dbWant);
        res.json(dbWant)
      })
      .catch(err => res.status(422).json(err));
  },

    createWants: function (req, res) {
        db.Want
            .create({
                owner: req.body.owner,
                itemName: req.body.itemName,
                itemDescription: req.body.itemDescription,
                wantImage: req.body.wantImage,
                userName: req.body.userName,})
            .then(dbWant => res.json(dbWant))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Want
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbWant => res.json(dbWant))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Want
            .findById({ _id: req.params.id })
            .then(dbWant => dbWant.remove())
            .then(dbWant => res.json(dbWant))
            .catch(err => res.status(422).json(err));
    }
};

