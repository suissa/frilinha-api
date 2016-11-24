module.exports = (Models, MODEL_NAME, PRIMARY_KEY) => (req,res,next) => {
    var busca = {}
    busca[PRIMARY_KEY] = req.params.id
    Models[MODEL_NAME].update(req.body,{where:busca})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log('error',error)
        })
}