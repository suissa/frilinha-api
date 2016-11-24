const express = require('express')
const router = express.Router()

const MODULES_DIR_NAME = 'modules'
const CONTROLLER_NAME = __dirname.split(MODULES_DIR_NAME)[1].slice(1)
const Controller = require('./controller.' + CONTROLLER_NAME)

router.get('/',  Controller.findAll)
router.get('/id/:id', Controller.findById)
router.put('/id/:id', Controller.update)
// router.get('/pag/:pag',  Controller.findAllByPage)
// router.get('/id/:id',  Controller.findById)

router.post('/', Controller.create)
router.post('/login', Controller.login)

module.exports = router
