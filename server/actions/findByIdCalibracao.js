module.exports = (Models, MODEL_NAME, options) => (req, res, next) => {
  options = {}
  options.where = { ci_cal_cod: req.params.id }
  options.order = 'ci_titulo'

  Models[MODEL_NAME].findAll(options)
  .then((data) => {
    res.json(data)
  })
  .catch((error) => {
    // res.json(error)
    console.log('error', error)
  })
} 