const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/User')

const isValidLogin = (user, password) => bcrypt.compareSync(password, user.password) // ==> checkea si la pw es correcta (lo hace todo bcrypt)
const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null) // ==> encripta la contraseña que recibe por parámetro en el signup con passport (bcrypt)

passport.use('login', new LocalStrategy(
	(username, password, done) => {
		User.findOne({ username }, (error, user) => {
			if (error) return done(error)
			if (!user) return done(null, false, { message: 'El usuario no existe' })
			if (!isValidLogin(user, password)) return done(null, false, { message: 'Usuario y/o contraseña no válidos' })
			return done(null, user)
		})
	}
))

passport.use('signup', new LocalStrategy({
	passReqToCallback: true
},
	(req, username, password, done) => {
		User.findOne({ 'username': username }, (error, user) => {
			if (error) return done(error, user, { message: 'Error al intentar registrar el usuario' })
			if (user) return done(null, false, { message: 'El usuario ya existe'})
			const newUser = { username, password: createHash(password) }
			User.create(newUser, (error, userWithId) => {
				if (error) return done(error, user, { message: 'Error creando usuario' })
				return done(null, userWithId, { message: 'Usuario registrado correctamente!' })
			})
		})
	}
))

passport.serializeUser((user, done ) => done(null, user._id))
passport.deserializeUser((id, done) => User.findById(id, done))

const checkAuthentication = (req, res, next) => {
	if (req.isAuthenticated()) next() // con el method isAuthenticated de passport se fija directamente con el login si está autenticado el usuario
	else res.redirect('/login')
}

module.exports = checkAuthentication


