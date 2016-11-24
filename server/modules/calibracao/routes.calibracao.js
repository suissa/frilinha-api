const express = require('express')
const router = express.Router()

const MODULES_DIR_NAME = 'modules'
const CONTROLLER_NAME = __dirname.split(MODULES_DIR_NAME)[1].slice(1)
const Controller = require('./controller.' + CONTROLLER_NAME)

const ControllerItems = require('./controller.calibracao_item')

// let offset = 0
// let limit = 10
//
// router.get('/',  Controller.findAll)
// router.get('/pag/:pag',  Controller.findAllByPage)
// router.get('/id/:id',  Controller.findById)

router.get('/',  Controller.findAll)
router.get('/id/:id', Controller.findById)
router.put('/id/:id', Controller.update)
router.get('/pag/:pag',  Controller.findAllByPage)
router.get('/id/:id',  Controller.findById)
router.post('/', Controller.create)

// router.get('/join',  Controller.findAllJoin)

/**

Precisamos executar essa query pra page inicial:

select 
  ins_tag, ins_prdescricao, cal_datacalibracao, 
  cal_periodicidade, ins_localizacao, ins_setor,
  ins_nro_certificacao, cal_situacao, co_nome, 
  va_data, va_nro_rv 
from calibracaos 
join instrumentos on cal_certificado = ins_nro_certificacao
left join validacaos on va_cal_cod = cal_cod
left join contatos on co_ccod = va_us_cod
where cal_situacao = 'pendente'

*/
queryResult = [
  {
    cal_cod: 257,
    ins_tag: 'FH-007', 
    ins_prdescricao: 'HIDRÔMETRO', 
    cal_datacalibracao: '2016-10-17', 
    cal_periodicidade: 5, 
    ins_localizacao: 'E.T.E. (AREA  EXTERNA)', 
    ins_setor: 'E.T.E. (AREA  EXTERNA)',
    ins_nro_certificacao: 'DV-0977/14', 
    cal_situacao: 'pendente', 
    co_nome: '', 
    va_data: '', 
    va_nro_rv: '' 
  },
  {
    cal_cod: 258,
    ins_tag: 'CT-0022', 
    ins_prdescricao: 'TERMÔMETRO DIGITAL', 
    cal_datacalibracao: '2016-10-17', 
    cal_periodicidade: 6, 
    ins_localizacao: 'QUALIDADE', 
    ins_setor: 'LATICíNIOS',
    ins_nro_certificacao: 'DM-0819/16', 
    cal_situacao: 'pendente', 
    co_nome: '', 
    va_data: '', 
    va_nro_rv: '' 
  }
]

router.get('/pendentes',  (req, res, next) => {
  res.json(queryResult)
})
// router.get('/join',  Controller.findAllJoin)
router.get('/joinInst', Controller.findAllJoinInstrumentos)
router.get('/joinInst/:id', Controller.findByIdJoinInstrumentos)

// router.get('/joinItens', Controller.findAllJoinItens)
router.get('/itens',  ControllerItems.findAll)
router.get('/itens/:id',  ControllerItems.findByIdCalibracao)
router.get('/itens/:id/faixa',  ControllerItems.findByIdCalibracao)

module.exports = router
