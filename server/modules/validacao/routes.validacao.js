const express = require('express')
const router = express.Router()

const MODULES_DIR_NAME = 'modules'
const CONTROLLER_NAME = __dirname.split(MODULES_DIR_NAME)[1].slice(1)
const Controller = require('./controller.' + CONTROLLER_NAME)

router.get('/',  Controller.findAll)
router.get('/pag/:pag',  Controller.findAllByPage)
router.get('/id/:id',  Controller.findById)
router.post('/', Controller.create)

queryResult = [
  {
    va_cod: 257,
    va_cal_cod: 'FH-007',
    va_data: '2016-10-17',
    va_usuario: 'USER',
    va_us_cod: 5,
    va_situcao: 'pendente'
  },
  {
    va_cod: 258,
    va_cal_cod: 'FH-111',
    va_data: '2016-10-19',
    va_usuario: 'USER',
    va_us_cod: 6,
    va_situcao: 'pendente'
  }
]
router.get('/mock',  (req, res, next) => {
  res.json(queryResult)
})
router.get('/mock/:id',  (req, res, next) => {
  let id = req.params.id
  for(var i = 0; i <= queryResult.length; i++)
  res.json(queryResult[i])
  // console.log(queryResult[i]);
})

module.exports = router
