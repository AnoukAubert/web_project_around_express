const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const filePath = path.join(__dirname, '../data/users.json');

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

module.exports = router;