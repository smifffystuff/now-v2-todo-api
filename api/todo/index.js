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
    case 'PATCH':
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

const deletePost = async (req, res) => {
  const todoId = req.query.param;
  const todo = Todo.findById(todoId);
  await todo.remove();
  return res.json({ msg: 'Post Deleted' });
};

const amendPost = async (req, res) => {
  console.log(req.query.param);
  console.log(req.body);
  const todoId = req.query.param;
  const { description, complete } = req.body;
  console.log(description, complete);
  const todo = await Todo.findById(todoId);
  if (description) {
    toto.description = description;
  }
  if (complete !== undefined) {
    todo.complete = complete;
  }
  await todo.save();
  return res.json({ todo });
};
