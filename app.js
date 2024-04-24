const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mynewdb');

app.use(cardsRouter);
app.use(usersRouter);
//users

app.use('/', (req, res) => {
  return res.status(HttpStatus.NOT_FOUND).send(HttpResponseMessage.NOT_FOUND);
})

app.listen(PORT, () => {
  console.log(`La aplicación está detectando el puerto ${PORT}`);
});

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133' // pega el _id del usuario de prueba que creamos en el paso anterior
  }; //OJO ID!!!

  next();
});

module.exports.createCard = (req, res) => {
  console.log(req.user._id); // _id se volverá accesible
};