var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var storage = require('node-sessionstorage');



var config =require('.././database/config');
var db = mysql.createConnection(config);

module.exports = {


	getUsers: (request, response) => {

		let sql = 'SELECT * FROM usuarios';
	
		db.query(sql, (err, rows) => {
			if (err) throw err;
	
			// console.log(rows)
			response.render('usuarios', {
				title: "Lista de usuarios",
				usuarios: rows
			})
		});
	},


	postLogin: function(request, response) {
		var username = request.body.username;
		var password = request.body.password;
		if (username && password) {
			// connection.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			db.query('SELECT * FROM usuarios WHERE username = ?', username, function(error, results, fields) {
				console.log(results);
				if (results.length > 0) {
	
					var user = results[0];
					// console.log(user)
					if (bcrypt.compareSync(password, user.password)) {
						request.session.loggedin = true;
						request.session.username = username;
						storage.setItem('userId', user.id);
						console.log('item set:', storage.getItem('userId'))

	
						response.redirect('/miperfil');
					} else {
						alert('Usuario o contraseña incorrecta!');
						res.redirect(req.headers.referer);
					}
	
				} else {
					// request.flash('mensajeRegistro','Gracias por crear tu cuenta, ahora estas autentificado.');
					alert('Usuario no se encuentra registrado!');
					res.redirect(req.headers.referer);
				}
				response.end();
			});
		} else {
			response.send('Please enter Username and Password!');
			response.end();
		}
	  },

	  addResena: (request, response) => {

		var username = request.body.username;
		var password = request.body.password;
		var resena = request.body.resena;
		var puntaje = request.body.puntaje;
		var idPelicula = request.body.idPelicula;
		var url = request.headers.referer;

		if (username && password && resena) {
			//validar que el usuario exista y conincida la clave en la base
			db.query('SELECT * FROM usuarios WHERE username = ?', username, function(error, results) {
				console.log((result));
				if (results) {
	
					var user = results[0];
					// console.log(user)
					if (bcrypt.compareSync(password, user.password)) {
	
						var userResena = {
							idPelicula: idPelicula,
							idUser: user.id,
							resena: resena,
							puntaje: puntaje
						}
	
						//inserto en la base la reseña
						db.query('INSERT INTO resenas SET ?', userResena, (error, result) => {
	
							response.redirect(request.headers.referer);
						});
	
						// response.redirect('/');
					} else {
						// alert('Usuario o contraseña incorrecta!');
						response.redirect('/login');
						
					}
	
				} else {
					// request.flash('mensajeRegistro','Gracias por crear tu cuenta, ahora estas autentificado.');
					// alert('Usuario no se encuentra registrado!');
					res.redirect(request.headers.referer);
				}
			});
		} else {
			alert('Faltan campos por llenar')
			res.redirect(req.headers.referer);
		}
	
	},

	searchUser: (req, res) => {
		var searchUser = req.body.searchUser;
		if(req.body.searchUser == undefined){
			res.send("no se ha recibido ningun searchUser");
		} else {
	
			let sql = "SELECT * FROM usuarios WHERE username LIKE '%" + searchUser + "%' OR email LIKE '%" + searchUser + "%'";
	
			db.query(sql, (err, rows) => {
				if (err) throw err;
		
				// console.log(rows);
				res.render('usuarios', {
					title: "Search for: " + searchUser,
					usuarios: rows
				})
			});
	
	
		}
	},


	getResenasListByUser: (req, res) => {
		var userId = storage.getItem('userId');

		let sql = "SELECT * FROM resenas WHERE idUser = " + userId ;
	
			db.query(sql, (err, rows) => {
				// if (err) throw err;
		
				// console.log(rows);
				res.send(rows);
			});
	},


	getMyProfile: (req, res) => {
		var userId = storage.getItem('userId');

		let sql = "SELECT * FROM usuarios WHERE id = " + userId ;
	
			db.query(sql, (err, rows) => {
				// if (err) throw err;
		
				// console.log(rows);
				res.send(rows);
			});
	},

	deleteResena: (req, res) => {
		var resenaId = req.params.id;
		let sql = "DELETE FROM resenas WHERE id = " + resenaId;

		db.query(sql, (err, result) => {
			if (err) throw err;
			res.redirect(req.headers.referer);
		});
	},

	getResena: (req, res) => {
		var resenaId = req.params.id;
		let sql = "SELECT * FROM resenas WHERE id = " + resenaId;

		db.query(sql, (err, result) => {
			console.log(result[0])
			res.render('editarResena', {
				title: 'Editar Reseña',
				resena: result[0]
			})
		});
	},

	updateResena: (req, res) => {
		var resenaId = req.body.id;
		var idPelicula = req.body.idPelicula;
		var idUser = req.body.idUser;
		var resena = req.body.resena;
		var puntaje = req.body.puntaje;

		let sql = "UPDATE resenas SET idPelicula = '" + resenaId + "', idUser = '" + idUser + "', resena = '" + resena + "', puntaje = " + puntaje;
		
		db.query(sql, (err, result) => {
			res.redirect('/miperfil');
 
		});
	},



	postRegister: (request, response) => {
		var salt = bcrypt.genSaltSync(10);
		var password = bcrypt.hashSync(request.body.password, salt);
		var userRegister = {
			username: request.body.username,
			email: request.body.email,
			password: password,
			born_date: request.body.born_date
		}
	
		db.query('INSERT INTO usuarios SET ?', userRegister, (error, result) => {
			if (error) throw error;
	
			// console.log(result)
				// response.status(201).send(
				//   request.flash('mensajeRegistro','Gracias por crear tu cuenta, ahora estas autentificado.')
				// );
			response.status(201).send(`User added with ID: ${result.insertId}`);
		});
	},

	getUserById: function(request, response) {
		let userid = request.params.userid;
		if (request.params.userid == undefined) {
			console.log(request);
			response.send("No se recibio ningun parametro");			
		}
		db.query('select * from usuarios as u inner join resenas as r where u.id = ? and u.id = r.idUser', userid, (err, rows) => {
			if (err) throw err;
	
			// console.log(rows);
			response.render('userdetail', {
				title: "Detalle de usuarios",
				usuario: rows
			})
		});
	},

	getResenas: (req, res) => {
		var idPelicula = req.params.idPelicula;
		
		db.query('SELECT * FROM resenas AS r INNER JOIN usuarios AS u WHERE r.idPelicula = ? AND r.idUser = u.id', idPelicula, (err, rows) => {
			// if (err) throw err;
	
			// console.log(rows);
			( rows == undefined) ? res.send("No hay reseñas.") : res.send(rows);
		});
	},



};