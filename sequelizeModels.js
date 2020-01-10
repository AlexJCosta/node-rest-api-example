const Sequelize = require('sequelize');
const dbConfig = require('./config');
var db = {};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false
});

//Models
db.User = require('./user/user')(sequelize, Sequelize.DataTypes);
db.Address = require('./address/address')(sequelize, Sequelize.DataTypes);

//Relationships
db.User.belongsTo(db.Address, { as: 'address', onDelete: 'cascade', onUpdate: 'restrict'});

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db;