var express = require('express');
var app = express();
var stats = require('./stats.js');

app.set('views', __dirname + '/app');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/stats', function(req, res) {
    // log: date | ip | user-agent
	var now = new Date();
    console.log(now.toLocaleString() + ' | ' + req.ip + ' | ' + req.headers['user-agent']);

	var ret = stats.getNodesByUserAgent();
	
	res.json(ret);
});

app.listen(3000);