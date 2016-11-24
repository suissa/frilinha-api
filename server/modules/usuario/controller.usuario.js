const Models = require('../../models/')
const MODEL_NAME = __dirname.split('modules')[1].slice(1)
const PREFIX = 'us_'
const PRIMARY_KEY = PREFIX + 'cod'
const ACTIONS_PATH = '../../actions/'

let offset = 0
let limit = 10
let attributes = [
  PRIMARY_KEY, 
  PREFIX + 'login'
]

const options = { offset, limit, attributes }

const findAll = require(ACTIONS_PATH + 'findAll')(Models, MODEL_NAME, options)
const findById = require(ACTIONS_PATH + 'findById')(Models, MODEL_NAME, options)
const findAllByPage = require(ACTIONS_PATH + 'findAllByPage')(Models, MODEL_NAME, options)
const create = require(ACTIONS_PATH + 'create')(Models, MODEL_NAME)
const update = require(ACTIONS_PATH + 'update')(Models, MODEL_NAME, PRIMARY_KEY)
const login = require(ACTIONS_PATH + 'login')(Models, MODEL_NAME)

module.exports = {
  findAll,
  findById,
  findAllByPage,
  create,
  update,
  login
}