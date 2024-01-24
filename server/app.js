require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors')

// Mongoose setup
//console.log("connection string: " + process.env.MONGODB_URI)
const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
const mongoDB = process.env.MONGODB_URI
// Try connecting
main().catch((err) => {
  console.log(err)
});
async function main() {
  await mongoose.connect(mongoDB);
}

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

// Enable CORS
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
