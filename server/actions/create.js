module.exports = (Models, MODEL_NAME) => (req,res,next) => {
  
  Models[MODEL_NAME].create(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      console.log('error: ',error)
    })
}