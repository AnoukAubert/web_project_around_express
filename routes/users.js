const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const filePath = path.join(__dirname, '../data/users.json');
const User = require('../models/user');

router.get('/users', (request, response) => {
  fs.readFile(filePath).then(content => {
    const jsonData = JSON.parse(content);
    response.send(jsonData);
  })
});

router.get('/users/:id', (request, response)=> {
  fs.readFile(filePath).then(content => {
    const jsonData = JSON.parse(content);
    const user = jsonData.find(user => user._id === request.params.id)
    if(user){
      response.send(user)
    }else{
      response.status(404).send({message: 'NOT FOUND'});
    }
  })
})

router.post('/', (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Error' }));
});

module.exports = router;