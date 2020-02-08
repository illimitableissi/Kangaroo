const db = require("../models");

module.exports = {
    findOne: function(req, res) {
        db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findbyId: function(req, res) {
        db.User
        .find({ _id: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    createUser: function(req, res) {
        db.User
        .create(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    updateListing: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id },
            { $push: {"yourListing": req.body}})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
} 