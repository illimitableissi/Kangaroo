const db = require("../models");

// Defining methods for the listingsController
module.exports = {
  findAll: function(req, res) {
    db.listings
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.listings
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function(req, res) {
    db.listings
      .find(req.query)
      .where("location").equals(req.params.location)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByPrice: function(req, res) {
    db.listings
      .find(req.query)
      .where("location").equals(req.params.location)
      .where("price").equals(req.params.price)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserName: function(req, res) {
    db.listings
      .find(req.query)
      .where("userName").equals(req.params.userName)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.listings
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.listings
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.listings
      .findOneAndUpdate({ _id: req.params.id },
        { $push: {"messages": req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}