const Models = require('../../models/')
const MODEL_NAME = __dirname.split('modules')[1].slice(1)
const PREFIX = 'cal_'
const PRIMARY_KEY = PREFIX + 'cod'
const ACTIONS_PATH = '../../actions/'

let offset = 0
let limit = 10
let attributes = [
  PRIMARY_KEY,
  PREFIX + 'datacalibracao'
]

const options = { offset, limit, attributes }


const findAll = require(ACTIONS_PATH + 'findAll')(Models, MODEL_NAME,options)
const findById = require(ACTIONS_PATH + 'findById')(Models, MODEL_NAME, options)
const findAllByPage = require(ACTIONS_PATH + 'findAllByPage')(Models, MODEL_NAME, options)
const create = require(ACTIONS_PATH + 'create')(Models, MODEL_NAME)
const update = require(ACTIONS_PATH + 'update')(Models, MODEL_NAME, PRIMARY_KEY)

// let include = [{model: Models['calibracao_item']}]
let includeInst = [{model: Models['instrumento']}]

//options.include = include
// const findAllJoin = require(ACTIONS_PATH + 'findAllJoin')(Models, MODEL_NAME, options,include)
const findAllJoinInstrumentos = require(ACTIONS_PATH + 'findAllJoinInstrumentos')(Models, MODEL_NAME, options, includeInst)
const findByIdJoinInstrumentos = require(ACTIONS_PATH + 'findByIdJoinInstrumentos')(Models, MODEL_NAME, options, includeInst)


// let includeItem = [{model: Models['calibracao_item']}]
// const findAllJoinItens = require(ACTIONS_PATH + 'findAllJoinInstrumentos')(Models, MODEL_NAME, options, includeItem)


module.exports = {
  findAll,
  // findAllJoin,
  findAllJoinInstrumentos,
  findByIdJoinInstrumentos,
  // findAllJoinItens,
  findById,
  findAllByPage,
  create,
  update,
}