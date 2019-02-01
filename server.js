var express = require('express');
var app = express();

app.set('view engine', 'pug')

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', { title: 'Toci'})
});

app.get('/signup', function (req, res) {
    res.render('index', { title: 'Toci | Registrate'})
});

app.get('/signin', function (req, res) {
    res.render('index', { title: 'Toci | Ingresa'})
});

app.get('/como_te_sientes', function (req, res) {
    res.render('index', { title: 'Toci | ¿Como te sientes?'})
});

app.get('/mal_tengo', function (req, res) {
    res.render('index', {title: 'Toci | Mal, tengo ...'})
});

app.get('/dolor', function (req, res) {
    res.render('index', {title: 'Toci | Dolor'})
});

app.listen(3000, function (err) {
    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log('Toci escuchando en el puerto 3000');
})
