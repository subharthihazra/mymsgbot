const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// Error Handling Middleware
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;
