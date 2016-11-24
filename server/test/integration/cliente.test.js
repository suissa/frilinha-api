describe('TESTES PARA A ENTIDADE CLIENTE', function() {

    describe('TESTES PARA A API /api/clientes', function() {

        it('DEVE RETORNAR STATUSCODE 200 - OK', function(done) {
            request
                .get('/api/clientes')
                .end(function(err,res) {
                    expect(res.statusCode).to.be.eql(200)
                    done(err)
                })
        })

        it('DEVE RETORNAR UM ARRAY DO RES.BODY', function(done) {
            request
                .get('/api/clientes')
                .end(function(err,res) {
                    expect(res.body).to.be.instanceof(Array)
                    done(err)
                })
        })

        it('DEVE RETORNAR AS INFORMAÇÕES DO CLIENTE', function(done) {
            request
                .get('/api/clientes')
                .end(function(err,res) {
                    expect(res.body[0].cl_cod).to.be.eql(1)
                    expect(res.body[0].cl_razao).to.be.eql('CALIBRACOM CONTROLE DE PROCESSOS INDUSTRIAIS LTDA')
                    done(err)
                })
        })
    })
})