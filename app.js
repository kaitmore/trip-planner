const express = require('express');
const app = express();

const db = require('./models');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
var Promise = require('bluebird');

var Place = require('./models/place');
var Activity = require('./models/activity');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/public/stylesheets'));
app.use(express.static(__dirname + '/public/js'));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  noCache: true
});

app.get('/', function (req, res, next) {

  Promise.all([Hotel.findAll(), Activity.findAll(), Restaurant.findAll()])
    .then(function (data) {
      var hotels = data[0];
      var activities = data[1];
      var restaurants = data[2];

      res.render('index', {
        hotels: hotels,
        activities: activities,
        restaurants: restaurants
      })
    }).catch(next);

});


// add routes here
app.use(function (req, res, next) {
  const err = new Error('That page doesn\'t exist!');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  err.status = err.status || 500;
  console.log(err);
  res.status(err.status).render('error', {
    err: err
  });
});

db.sync()
  .then(function () {
    app.listen(1337, function () {
      console.log("Server is listening on port 1337");
    });
  });
module.exports = app;