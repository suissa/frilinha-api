const UserSession = require('../modules/usuario/session')

module.exports = (Models, MODEL_NAME, options) => (req, res, next) => {

  let user = req.body
  user.us_ativo = 1  
  console.log(user)

  const query = { where: { us_login: user.us_login, 
                            us_senha: user.us_senha, 
                            us_cod: user.us_cod, 
                            us_ativo: user.us_ativo
                          },
                  attributes: ['us_cod', 'us_login']
                }
  Models[MODEL_NAME].findOne(query)
  .then((Instance) => {
    if (Instance) {
      console.log('SUCESSO', Instance.dataValues)
      // console.log('SUCESSO', Instance)

      // req.user = Instance.dataValues;
      // delete req.user.password; // delete the password from the session
      req.session.user = Instance.dataValues;  //refresh the session value
      UserSession.user.id = Instance.get('us_cod')
      UserSession.user[Instance.get('us_cod')] = Instance.dataValues;  //refresh the session value
      // res.locals.user = Instance.dataValues;
      // req.session.save(function(err) {
      //   if (err) throw new Error(err)
      //   console.log('Salvou', req.session)
      // })
      console.log('SESSION', UserSession)
      res.json(Instance.dataValues) 
    }
  })
  .catch((err) => {
    console.log('EERRROOO', err)
    res.json(err)
  })
}