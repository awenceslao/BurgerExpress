var express = require('express'),
pug = require('pug'),
path = require('path'),
menu = require('./menu.json');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    res.render('index');
} );


 app.get('/:viewname', function(req, res){
     res.render(req.params.viewname, menu);
 });


app.get('/:viewname', function(req, res){
    res.render(req.params.viewname, menu);
});



app.listen(3000);