var Userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
  // validate the request
  if (!req.body) {
    res.status(400).send({ message: 'Content cannot be empty' });
    return;
  }
};

// retrieve and return all users/retrieve and return a single user

exports.find = (req, res) => {};

// update a new identified user by user id

exports.update = (req, res) => {};

// delete a user with specified user id in the request

exports.delete = (req, res) => {};
