const db = require('../../db/database');
const Todo = require('../../db/models/Todo');

module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      return retrievePosts(req, res);
    case 'POST':
      return createPost(req, res);
    case 'DELETE':
      return deletePost(req, res);
    case 'PUT':
      return amendPost(req, res);
    default:
      res.status(405).json({ msg: 'Method not allowed' });
  }
};

const retrievePosts = async (req, res) => {
  const todoId = req.query.param;
  if (todoId) {
    const todo = await Todo.findById(todoId);
    return res.json({
      todo
    });
  } else {
    const todos = await Todo.find();
    return res.json({
      todos
    });
  }
};

const createPost = async (req, res) => {
  const { description, complete } = req.body;
  const newTodo = new Todo({
    description,
    complete
  });
  const todo = await newTodo.save();
  return res.json({
    todo
  });
};

const deletePost = (req, res) => {
  return res.json({ msg: 'Delete a post', status: 'Good', method: req.method });
};

const amendPost = (req, res) => {
  return res.json({ msg: 'Amend a post', status: 'Good', method: req.method });
};
