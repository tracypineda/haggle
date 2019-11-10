const db = require("../models");

module.exports = {
findAll: function (req, res) {
    db.Wants
        .find(req.query)
        .sort({createdAt: -1})
        .then(dbWants => res.json(dbWants))
        .catch(err => res.status(422).json(err));
},
findById: function(req, res){
    db.Wants
    .findById(req.params.id)
    .then(dbWants => res.json (dbWants))
    .catch(err => res. status(422).json(err));
},
create: function(req,res){
    db.Wants
    .create(req.body)
    .then(dbWants => res.json(dbWants))
    .catch(err => res.status(422).json(err));
},
update: function(req, res) {
    db.Wants
    .findOneAndUpdate({_id:req.params.id}, req.body)
    .then(dbWants => res.json (dbwants))
    .catch (err => res.status(422).json(err));
},
remove: function(req, res) {
    db.Wants
    .findById({_id: req.params.id})
    .then (dbWants => dbWants.remove())
    .then(dbWants => res.json(dbWants))
    .catch(err=> res. status(422).json(err));
}
};