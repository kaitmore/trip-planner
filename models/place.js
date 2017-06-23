const db = require('./db');
var Sequelize = require('sequelize');


var Place = db.define('Place', {
    address: {
        type: Sequelize.STRING
    },
     city: {
        type: Sequelize.STRING
    },
     state: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
     location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
});



module.exports = Place;