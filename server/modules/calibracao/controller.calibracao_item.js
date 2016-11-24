/**
 * Created by leonardoribeiro on 11/8/16.
 */
const Models = require('../../models/')
const MODEL_NAME = 'calibracao_item'
const PREFIX = 'ci_'
const PRIMARY_KEY = PREFIX + 'cod'
const ACTIONS_PATH = '../../actions/'

let offset = 0
let limit = 10
let attributes = [
  PRIMARY_KEY,
  PREFIX + 'titulo',
  PREFIX + 'vm',
  PREFIX + 'vr',
  PREFIX + 'erro',
  PREFIX + 'incerteza',
  PREFIX + 'unidade',
  PREFIX + 'erro_incerteza',
  PREFIX + 'situacao'
]


const options = { offset, limit, attributes }


const findAll = require(ACTIONS_PATH + 'findAll')(Models, MODEL_NAME,options)
const findById = require(ACTIONS_PATH + 'findById')(Models, MODEL_NAME, options)

const findByIdCalibracao = require(ACTIONS_PATH + 'findByIdCalibracao')(Models, MODEL_NAME, options)
const findAllByPage = require(ACTIONS_PATH + 'findAllByPage')(Models, MODEL_NAME, options)
// const create = require(ACTIONS_PATH + 'create')(Models, MODEL_NAME)
// const update = require(ACTIONS_PATH + 'update')(Models, MODEL_NAME, PRIMARY_KEY)

let include = [{model: Models['calibracao']}]
const findAllJoin = require(ACTIONS_PATH + 'findAllJoin')(Models, MODEL_NAME, options, include)



module.exports = {
  findAll,
  findById,
  findAllByPage,
  findAllJoin,
  findByIdCalibracao,
}