const Models = require('../../models/')
const MODEL_NAME = __dirname.split('modules')[1].slice(1)
const PREFIX = 'co_'
const PRIMARY_KEY = PREFIX + 'ccod'

let offset = 0
let limit = 10
let attributes = [
  PRIMARY_KEY, 
  PREFIX + 'datacalibracao'
]

const findAll = (req, res, next) => {
  offset = 0 * limit

  Models[MODEL_NAME].findAll({ offset, limit, attributes })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      // res.json(error)
      console.log('error', error)
    })
}

const findById = (req, res, next) => {

  let id = req.params.id

  Models[MODEL_NAME].findById(id, {attributes})
  .then((data) => {
    res.json(data)
  })
}


const findAllByPage = (req, res, next) => {
  offset = limit * req.params.pag

  Models[MODEL_NAME].findAll({ offset, limit, attributes })
  .then((data) => {
    res.json(data)
  })
  .catch((error) => {
    // res.json(error)
    console.log('error', error)
  })
}  

module.exports = {
  findAll,
  findById,
  findAllByPage,
  // create
}