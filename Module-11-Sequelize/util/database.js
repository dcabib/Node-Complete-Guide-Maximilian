const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mypassword', {
  dialect: 'mysql',
  host: 'localhost',
  insecureAuth: true,
});

module.exports = sequelize;
