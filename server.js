//Подключим express
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( cors({ origin: '*' }) );

app.get('/', function (req, res) {
   res.send('Hello Api') 
});

app.listen(3012, function() {
    console.log('Api app started')
});

//Команда для запуска сервера node server.js