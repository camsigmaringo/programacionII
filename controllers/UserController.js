var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports ={

	getSignUp : function(req,res,next){
		return res.render('users/signup');
	},

	postSignUp : function(req,res,next){
		//encriptamos la clave antes de insertarlo
		var salt = bcrypt.genSaltSync(10);
		var password = bcrypt.hashSync(req.body.password, salt);
		var user = {
			email : req.body.email,
			nombre : req.body.nombre,
			password : password
		};
		var config =require('.././database/config');
		var db = mysql.createConnection(config);
		
		// conectamos la DB

		db.connect();
		
		// insertamos los valores enviados desde el formulario
		db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
			if(err) throw err;
			db.end();
		});
		req.flash('info', 'Se ha registrado correctamente ya puede iniciar session');
		return res.redirect('/auth/signin');
	},

	getSignIn : function(req,res,next){
		return res.render('users/signin', {message:req.flash('info'), authmessage: req.flash('authmessage')});
	},
	logout : function(req,res,next){
		//esta es una llamada a la funcion logout de passport
		req.logout();
		res.redirect('/auth/signin');
	},
	getUserPanel : function(req,res,next){
		res.render('users/panel',{
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},


	postLogin: function(request, response) {
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
	  }

};