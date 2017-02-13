var express = require('express'),
pug = require('pug'),
path = require('path');

var app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '/public')));

app.listen(3000);