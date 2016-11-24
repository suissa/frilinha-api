module.exports = (Models, MODEL_NAME, options, include) => (req, res, next) => {
  //options.offset = options.limit * req.params.pag
  options.include = include
  Models[MODEL_NAME]
    .findAll(options)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      // res.json(error)
      console.log('error', error)
    })
}

