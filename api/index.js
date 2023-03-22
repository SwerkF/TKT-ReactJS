var express = require('express');
var bodyparser = require('body-parser');
var apiRouter = require('./apiRouter').router;

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

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
    res.status(200).send(' <a href="/missions/liste">Voir la liste des missions </a>');
})

app.use('/api/', apiRouter);

app.listen(3300, function() {
    console.log('Serveur lancé sur le port 3300');
})