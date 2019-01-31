var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios')

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/cryto', function (req, res) {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
  .then(results => {
    res.send(results.data)
  })
  .catch(err => {
    console.log(err)
  })
});

app.get('/cryto/:date', function (req, res) {
  let fromDate = req.params.date.slice(0,10)
  let toDate = req.params.date.slice(10,20)
  console.log(fromDate, toDate)
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}`)
  .then(results => {
    console.log(results.data)
    res.send(results.data)
  })
  .catch(err => {
    console.log(err)
  })
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});



