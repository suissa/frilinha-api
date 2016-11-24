const db = require('./config/db')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
// const routes = require('./routes/index')
// const users = require('./routes/users')


const API = {}
API.instrumentos = require('./modules/instrumento/routes.instrumento.js')
API.usuarios = require('./modules/usuario/routes.usuario.js')
API.calibracoes = require('./modules/calibracao/routes.calibracao.js')
API.clientes = require('./modules/cliente/routes.cliente.js')
API.validacoes = require('./modules/validacao/routes.validacao.js')


const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


// app.use(function(req, res, next) {



//   if (req.session && req.session.user) {
//     User.findOne({ email: req.session.user.email }, function(err, user) {
//       if (user) {
//         req.user = user;
//         delete req.user.password; // delete the password from the session
//         req.session.user = user;  //refresh the session value
//         res.locals.user = user;
//       }
//       // finishing processing the middleware and run the route
//       next();
//     });
//   } else {
//     next();
//   }
// });

function requireLogin (req, res, next) {
  const UserSession = require('./modules/usuario/session')
  const LOGIN_PATH = 'http://127.0.0.1:8080/#!/login'
  // console.log('requireLogin user', req.user)
  // console.log('requireLogin', UserSession)
  if (!UserSession.user) {
    res.redirect(LOGIN_PATH);
  } else {
    // console.log('TEM! next')
    next();
  }
};

app.use('/api/instrumentos', /*requireLogin,*/ API.instrumentos)
app.use('/api/usuarios', API.usuarios)
app.use('/api/calibracoes', /*requireLogin,*/ API.calibracoes)
app.use('/api/clientes', /*requireLogin,*/ API.clientes)
app.use('/api/validacoes', /*requireLogin,*/ API.validacoes)


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})


module.exports = app
