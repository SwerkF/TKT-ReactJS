var express = require('express');
var bodyparser = require('body-parser');
var apiRouter = require('./apiRouter').router;
var cors = require('cors')

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "localhost");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
});

app.get('/', function(req, res)  {
    res.setHeader('Content-Type', 'text/html' );
    res.status(200).send('<h1>Bienvenue dans l\'API.</h1>');
})

app.use('/api/', apiRouter);
console.log(apiRouter)
app.use('/api/src/images/', express.static('src/images'));

app.listen(3300, function() {
    console.log('Serveur lancé sur le port 3000');
})