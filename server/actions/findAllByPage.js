module.exports = (Models, MODEL_NAME, options) => (req, res, next) => {
  options.offset = options.limit * req.params.pag

  Models[MODEL_NAME].findAll(options)
  .then((data) => {
    res.json(data)
  })
  .catch((error) => {
    // res.json(error)
    console.log('error', error)
  })
} 