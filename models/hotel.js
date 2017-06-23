const db = require('./db');
var Sequelize = require('sequelize');

var Hotel = db.define('Hotel', {
    name: {
        type: Sequelize.STRING
    },
    num_stars: {
        type: Sequelize.FLOAT
    },
    amenities: {
        type: Sequelize.STRING
    }
});

module.exports = Hotel;