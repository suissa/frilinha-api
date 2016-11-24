describe('TESTE DE INTEGRAÇÃO PARA ENTIDADE USUARIO', function() {

    describe('TESTE PARA A ROTA /api/usuarios', function() {

        it('DEVE RETORNAR STATUSCODE 200 - OK', function(done) {
            request
                .get('/api/usuarios')
                .end(function(err,res) {
                    expect(res.statusCode).to.be.eql(200)
                    done(err)
                })
        })

        it('DEVE RETORNAR UMA ARRAY DO RES.BODY', function(done) {
            request
                .get('/api/usuarios')
                .end(function(err,res) {
                    expect(res.body).to.be.instanceof(Array)
                    done(err)
                })
        })

        it('DEVE RETORNAR SEGUINTE OBJETO', function(done) {
            request
                .get('/api/usuarios')
                .end(function(err,res) {
                    expect(res.body[0].us_cod).to.be.eql(1628)
                    done(err)
                })
        })

        it('DEVE CRIAR UM NOVO OBJETO', function(done) {

            const defaultUser = {
                us_login:'hc3',
                us_senha:'bemean',
                us_ativo:1,
            }

            request
                .post('/api/usuarios')
                .send(defaultUser)
                .end(function(err,res) {
                    expect(res.body.us_login).to.be.eql(defaultUser.us_login)
                    done(err)
                })
        })


        it('DEVE ATUALIZAR UM DETERMINADO OBJETO PRIMEIRO', function(done) {

            const updatedtUser = {
                us_login:'emerson@americadosulaero.com.br',
            }

            request
                .put('/api/usuarios/id/1628')
                .send(updatedtUser)
                .end(function(err,res) {
                    expect(res.body).to.be.eql([1]);
                    done(err)
                })
        })

        it('DEVE RETORNAR O OBJETO PROCURADO', function(done) {
            request
                .get('/api/usuarios/id/1628')
                .end(function(err,res) {
                    expect(res.statusCode).to.be.eql(200)
                    //expect(res.body.us_login).to.be.eql('emerson@americadosulaero.com.br')
                    done(err)
                })
        })

        it('DEVE ATUALIZAR UM DETERMINADO OBJETO SEGUNDO', function(done) {

            const updatedtUser = {
                us_login:'updatedUser',
                us_senha:'123',
                us_ativo:0,
            }

            request
                .put('/api/usuarios/id/1628')
                .send(updatedtUser)
                .end(function(err,res) {
                    expect(res.body).to.be.eql([1]);
                    done(err)
                })
        })

        it('DEVE FAZER LOGIN', function(done) {

            const usuarioLogin = {
                us_login:'qualidade@aoutecindustrial.com.br',
                us_senha:'123',
                us_cod:1630
            }

            request
                .post('/api/usuarios/login')
                .send(usuarioLogin)
                .end(function(err,res) {
                    console.log('resposta:',res.body);
                })
        })

    })
})