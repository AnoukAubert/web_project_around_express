const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const filePath = path.join(__dirname, '../data/cards.json');

router.get('/cards', (request, response) => {
  fs.readFile(filePath).then(content => {
    const jsonData = JSON.parse(content);
    response.send(jsonData);
  })
});


module.exports = router;