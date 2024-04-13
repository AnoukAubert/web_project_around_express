const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(cardsRouter);
app.use(usersRouter);
//users

app.use('/', (req, res) => {
  res.status(404).send({message: 'NOT FOUND'});
})

app.listen(PORT, () => {
  console.log(`La aplicación está detectando el puerto ${PORT}`);
});