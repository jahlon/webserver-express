var express = require('express');
var app = express();
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public') );

// Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'jesús anDrés hiNcapié'
    });
});

app.get('/about', function (req, res) {
    res.render('about');
});
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});