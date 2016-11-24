
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
// var basename  = path.basename(module.filename);

const MODULES_PATH = __dirname + '/../modules/'

fs
  .readdirSync(MODULES_PATH)
  .filter(function(dir) {
    console.log('dir', dir)
    return MODULES_PATH + dir + '/model.js'
    // return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    console.log([data], [...])
    // db[model.name] = model;
  });