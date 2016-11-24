module.exports = (Models, MODEL_NAME, options) => (req, res, next) => {

  let id = req.params.id

  Models[MODEL_NAME].findById(id, options)
  .then((data) => {
    res.json(data)
  })
}