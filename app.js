const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();

const HttpStatus = {
  NOT_FOUND:  404
}

const HttpResponseMessage = {
  NOT_FOUND: {
    status: false,
    message: 'NOT FOUND'
  }
}

mongoose.connect('mongodb://localhost:27017/mynewdb');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '662b113044608d33ce89aeb7'
  };

  next();
});

app.use(cardsRouter);
app.use(usersRouter);

app.use('/', (req, res) => {
  return res.status(HttpStatus.NOT_FOUND).send(HttpResponseMessage.NOT_FOUND);
})

app.listen(PORT, () => {
  console.log(`La aplicación está detectando el puerto ${PORT}`);
});

module.exports.createCard = (req, res) => {
  console.log(req.user._id);
};