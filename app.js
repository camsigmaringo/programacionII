var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs')

var configDB = require('./database/config')
//para mensajes de alertas
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var generoRouter = require('./routes/genero');
var detalleRouter = require('./routes/detalle');
var buscadorRouter = require('./routes/buscador');
var buscadorSimpleRouter = require('./routes/buscadorsimple');
var errorRouter = require('./routes/error');
var favoritoRouter = require('./routes/favoritos');
var quizRouter = require('./routes/quiz');
var ungeneroRouter = require('./routes/ungenero');
var loginRouter = require('./routes/login');
var registroRouter = require('./routes/registro');

var app = express();

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'telatiro'
});

//sesion
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(flash());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/genero', generoRouter);
app.use('/detalle', detalleRouter);
app.use('/buscador', buscadorRouter);
app.use('/buscadorsimple', buscadorSimpleRouter);
app.use('/error', errorRouter);
app.use('/favoritos', favoritoRouter);
app.use('/quiz', quizRouter);
app.use('/ungenero', ungeneroRouter);
app.use('/login', loginRouter);
app.use('/registro', registroRouter);


app.use(function(req, res, next){
  res.locals.mensajeRegistro= req.flash('mensajeRegistro');
  next();
 });
//login
app.post('/auth', function(request, response) {
  var username = request.body.username;
  // var salt = bcrypt.genSaltSync(10);
  // var password = bcrypt.hashSync(request.body.password, salt);
	var password = request.body.password;
	if (username && password) {
		// connection.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
      connection.query('SELECT * FROM usuarios WHERE username = ?', username, function(error, results, fields) {
			if (results.length > 0) {

        var user = results[0];
        // console.log(user)
        if(bcrypt.compareSync(password, user.password)){
          request.session.loggedin = true;
          request.session.username = username;
          response.redirect('/');
        } else {
          response.send('Usuario o contraseña incorrecta!');
        }

			} else {
        // request.flash('mensajeRegistro','Gracias por crear tu cuenta, ahora estas autentificado.');
				response.send('Usuario o contraseña incorrecta!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//registro
app.post('/register', (request, response) => {
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(request.body.password, salt);
  var userRegister = {
    username : request.body.username,
    email : request.body.email,
    password : password,
    born_date : request.body.born_date
  }

  connection.query('INSERT INTO usuarios SET ?', userRegister, (error, result) => {
      if (error) throw error;

      console.log(result)
      // response.status(201).send(
      //   request.flash('mensajeRegistro','Gracias por crear tu cuenta, ahora estas autentificado.')
      // );
      response.status(201).send(`User added with ID: ${result.insertId}`);
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
