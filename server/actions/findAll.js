module.exports = (Models, MODEL_NAME, options) => (req, res, next) => {
  options.offset = 0 * options.limit

  Models[MODEL_NAME].findAll(options)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      // res.json(error)
      console.log('error', error)
    })
}