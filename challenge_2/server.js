var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios')

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/cryto', function (req, res) {
  console.log('serving get request...');
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});



