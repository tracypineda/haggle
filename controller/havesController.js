const db = require("../models");

module.exports = {
findAll: function (req, res) {
    db.Have
        .find(req.query)
        .sort({createdAt: -1})
        .then(dbHave => res.json(dbHave))
        .catch(err => res.status(422).json(err));
},
getUserHaves: function (req, res) {
    db.Have
      .find({"user": req.user.username})
      .then(dbHave => {
        console.log("User related Wants", dbHave);
        res.json(dbHave)
      })
      .catch(err => res.status(422).json(err));
  },
findById: function(req, res){
    db.Have
    .findById(req.params.id)
    .then(dbHave => res.json (dbHave))
    .catch(err => res. status(422).json(err));
},
createHaves: function(req,res){
    db.Have
    .create.create({
        owner: req.body.owner,
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription,
        haveImage: req.body.haveImage,
        userName: req.body.userName,})
    .then(dbHave => res.json(dbHave))
    .catch(err => res.status(422).json(err));
},
update: function(req, res) {
    db.Have
    .findOneAndUpdate({_id:req.params.id}, req.body)
    .then(dbHave => res.json (dbHave))
    .catch (err => res.status(422).json(err));
},
remove: function(req, res) {
    db.Have
    .findById({_id: req.params.id})
    .then (dbHave => dbHave.remove())
    .then(dbHave => res.json(dbHave))
    .catch(err=> res. status(422).json(err));
}
};