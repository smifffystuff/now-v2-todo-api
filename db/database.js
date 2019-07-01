const mongoose = require('mongoose');

const { DB_URI } = process.env;

mongoose.connect(DB_URI, { useCreateIndex: true, useNewUrlParser: true });
mongoose.connection.once('open', () =>
  console.log('Connected to a MongoDB Server')
);
mongoose.connection.on('error', error => console.error(error));

module.exports = mongoose;
