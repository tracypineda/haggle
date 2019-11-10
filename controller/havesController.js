const db = require("../models");

module.exports = {
findAll: function (req, res) {
    db.Haves
        .find(req.query)
        .sort({createdAt: -1})
        .then(dbHaves => res.json(dbHaves))
        .catch(err => res.status(422).json(err));
},
findById: function(req, res){
    db.Haves
    .findById(req.params.id)
    .then(dbHaves => res.json (dbHaves))
    .catch(err => res. status(422).json(err));
},
create: function(req,res){
    db.Haves
    .create(req.body)
    .then(dbHaves => res.json(dbHaves))
    .catch(err => res.status(422).json(err));
},
update: function(req, res) {
    db.Haves
    .findOneAndUpdate({_id:req.params.id}, req.body)
    .then(dbHaves => res.json (dbHaves))
    .catch (err => res.status(422).json(err));
},
remove: function(req, res) {
    db.Haves
    .findById({_id: req.params.id})
    .then (dbHaves => dbHaves.remove())
    .then(dbHaves => res.json(dbHaves))
    .catch(err=> res. status(422).json(err));
}
};