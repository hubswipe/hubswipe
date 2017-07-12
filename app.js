const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');

const index = require('./routes/index');
const users = require('./routes/users');

const port = process.env.PORT || 3000;
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});


let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('new connection');

});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
