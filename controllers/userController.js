const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    createUser: function(req, res) {
        db.User
        .create(req.body)
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