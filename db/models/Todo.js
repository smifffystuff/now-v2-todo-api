const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Todo = model('todo', todoSchema);

module.exports = Todo;
