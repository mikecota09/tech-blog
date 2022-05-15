require('dotenv').config();

const Sequelize = require('sequelize');

// Create connection to db, whether local or on heroku using jawsdb
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;