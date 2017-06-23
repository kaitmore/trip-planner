const db = require('./db');
var Place = require('./place');
var Activity = require('./activity');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');


Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);


module.exports = db;
