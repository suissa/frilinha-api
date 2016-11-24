/**
 * Created by leonardoribeiro on 11/8/16.
 */
const Model = require('./model.calibracao_padroes.js')

const findAll = (req, res, next) => Model.findAll()
    .then((data) => {
    res.json(data)
})
const findById = (req, res, next) => Model.findById()
    .then((data) => {
    res.json(data)
})
const create = (req, res, next) => Model.create(req.body)
    .then((data) => {
    res.json(data)
})

module.exports = {
    findAll,
    findById,
    create,
}
