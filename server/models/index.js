const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename  = path.basename(module.filename)
const env = process.env.NODE_ENV || 'production'
const config = require(__dirname + '/../config/config.json')[env]
let db = {}
let PATH = ''

const MODULES_PATH = __dirname + '/../modules/'

if (config.DATABASE_URL) {
  var sequelize = new Sequelize(process.env[config.DATABASE_URL])
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config)
}



fs
  .readdirSync(MODULES_PATH)
  .map((dir) => (dir.indexOf('.DS') === -1) 
                  ? MODULES_PATH + dir + '/model.js'
                  : null)
  .forEach((file) => {
    if (file) {
      let models = require(file)
      PATH = file.split('model.js')[0]

      models.forEach((modelFile) => {
        var model = sequelize.import(path.join(PATH, modelFile))
        db[model.name] = model
      })   
    }
  })

Object.keys(db).forEach((modelName) => (db[modelName].associate) 
                                        ? db[modelName].associate(db)
                                        : null)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db


