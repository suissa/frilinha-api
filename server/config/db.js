const Sequelize = require('sequelize');

const connection = new Sequelize('centreso_calibracom', 'be3d93217016a3', 'f7ddc8e1', {
  host:'br-cdbr-azure-south-b.cloudapp.net',
  dialect:'mysql',
  define: {
    timestamps: false
  }
});
/*
 module.exports = new Sequelize('centreso', 'root', '', {
 host: 'localhost',
 dialect: 'mysql',
 pool: {
 max: 5,
 min: 0,
 idle: 10000
 }
 });
 */


// Or you can simply use a connection uri
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');