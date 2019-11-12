const db = require("../models");

module.exports = {
findAll: function (req, res) {
    db.Have
        .find(req.query)
        .sort({createdAt: -1})
        .then(dbHave => res.json(dbHave))
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
    .create(req.body)
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