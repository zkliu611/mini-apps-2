var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios')

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {

});



app.listen(3003, function() {
  console.log('listening on port 3003!');
});


