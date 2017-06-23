const db = require('./db');
var Sequelize = require('sequelize');

var Restaurant = db.define('Restaurant', {
    name: {
        type: Sequelize.STRING
    },
     cuisine: {
        type: Sequelize.STRING
    },
     price: {
        type: Sequelize.INTEGER
    }
});


module.exports = Restaurant;