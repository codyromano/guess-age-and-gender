const bodyParser = require('body-parser');
const path = require('path');
const predictGender = require('predictgender')
const predictAge = require('predictage');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/guess', function(req, res) {
  const sample = req.body.writingSample;
  const result = {
    age: predictAge(sample),
    gender: predictGender(sample)
  };
  res.send(
    JSON.stringify(result)
  );
});

app.listen(3000, function () {
  console.log('App started on port 3000')
});