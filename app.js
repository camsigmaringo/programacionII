var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userController = require('./controllers/UserController');

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
var authRouter = require('./routes/auth');
var registroRouter = require('./routes/registro');
var addResenaRouter = require('./routes/addResena');
var userDetailRouter = require('./routes/userdetail');
var myProfileRouter = require('./routes/myProfile');
var editarResenaRouter = require('./routes/editarResena')

var app = express();

//sesion
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
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


app.use(function(req, res, next) {
    res.locals.mensajeRegistro = req.flash('mensajeRegistro');
    next();
});
//login
app.use('/auth', authRouter);

//registro
app.use('/register', registroRouter);

//Lista de usuarios
app.use('/users', usersRouter);

//detalle de usuario
app.use('/users/:userid?', userController.getUserById);

//agregar reseña
app.use('/addresena', addResenaRouter);

//Buscador
app.post('/buscarusuario', userController.searchUser);

//get Reseñas
app.get('/getresenas/:idPelicula', userController.getResenas);

//get Reseña
app.get('/editarresena/:id', userController.getResena);

//user profile
app.use('/miperfil', myProfileRouter);

//get Reseñas usuario
app.get('/getresenasbyuser', userController.getResenasListByUser);

//get myprofile
app.get('/getmyprofile', userController.getMyProfile);

//Eliminar reseña
app.get('/deleteresena/:id', userController.deleteResena);

//editar
// app.use('/editarresena', editarResenaRouter);

//Guardar Reseña
app.post('/guardarresena', userController.updateResena);


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