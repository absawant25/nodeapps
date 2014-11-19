var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('view options', { layout:true });
app.set('views', __dirname + '/views');

app.get('/stooges/:name?', function(req, res, next){
	var name = req.params.name;

	switch(name ? name.toLowerCase() : '') {
		case 'lary':
		case 'curly':
		case 'moe':
			res.send(name + ' is my favorite stooge.');
		default:
		next();

	}
});

app.get('/stooges/*?', function(req, res){

	//res.send(' No stooges listed.');
	res.render('stooges', {stooge:null});
});

app.get('/?', function(req, res){
	//res.send('hello world');
	res.render('index');
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);
console.log('Type http://localhost:8080/ for running ...');