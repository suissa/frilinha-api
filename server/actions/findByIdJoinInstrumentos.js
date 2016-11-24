module.exports = (Models, MODEL_NAME, options, include) => (req, res, next) => {

  let id = req.params.id
  options.include = include

  Models[MODEL_NAME].findById(id, options)
  .then((data) => {
    res.json(data)
  })
}