const mongoose = require('mongoose');

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true, //validador
  },
  owner: {
    type: ObjectId,
    required: true,
  },
  likes: {
    type: ObjectId,
    defaultvalue: defaultfield.likes//me falta default field
  },
  createdAt: {
    type: Date,
    defaultvalue: Date.now()
  }
});

module.exports = mongoose.model('card', cardSchema)