const User = require("../models/user");
const {handleErrors} = require("../utils/utils");

const getAllUsers = (request, response) => {
  User.find({}).then((users) => {
    response.send({
      status: true,
      data: users
    })
  }).then(card => {
    res.send(card);
  }).catch(error => handleErrors(error, res));
};

const getUser = (req, res) => {
  User.findById(request.params.id).orFail().then((user) => {
    response.send({
      status: true,
      data: user
    })
  }).catch(error => handleErrors(error, res));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  console.log(req.user);

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(error => handleErrors(error, res));
};

const me = (req, res) => {
  const id = req.user._id;
  User.findById(id).then(user => {
    res.send(user);
  }).then(card => {
    res.send(card);
  }).catch(error => handleErrors(error, res));
};

const updateUser = (req, res) => {
  const id = req.user._id;
  const {about, name} = req.body;
  User.findByIdAndUpdate(id, {about, name}, { new: true }).then(user => {
    res.send(user);
  }).then(card => {
    res.send(card);
  }).catch(error => handleErrors(error, res));
};

const updateAvatar = (req, res) => {
  const id = req.user._id;
  const {avatar} = req.body;
  User.findByIdAndUpdate(id, {avatar}, { new: true }).then(user => {
    res.send(user);
  }).then(card => {
    res.send(card);
  }).catch(error => handleErrors(error, res));
};

module.exports = {getAllUsers, me, updateAvatar, updateUser, getUser, createUser}