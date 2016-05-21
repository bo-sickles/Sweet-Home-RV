var express = require("express");
var app = express();
var path = require("path")

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/Resources/index.html'));
});

app.use(express.static('Resources'));

app.listen(3000, '0.0.0.0', function() {
	console.log("Server running... ");
});