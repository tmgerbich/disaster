const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(helmet());

// Use routes
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/users', usersRouter);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
