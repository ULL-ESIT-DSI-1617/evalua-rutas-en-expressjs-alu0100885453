var express = require('express')
var app = express()
var path = require('path');


app.use('/user/:nombredeusuario', function (req, res, next) {
  console.log('Request Type:', req.method);
  console.log('User: ', req.params.nombredeusuario);
 // console.log('Time:', Date.now());
  	
  next();
});


app.use(express.static('public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// handler for the /user/:id path, which prints the user ID
app.get('/user/:nombredeusuario', function (req, res, next) {
//res.send('Hola '+ req.params.nombredeusuario)
 // res.end(req.params.nombredeusuario);
 res.render('index', { title: 'hola '+ req.params.nombredeusuario });
});
