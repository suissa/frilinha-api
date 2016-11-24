describe('TESTE PARA ENTIDADE VALIDAÇÃO', function() {

    describe('TESTE PARA API /api/validacoes', function() {

        it('DEVE RETORNAR STATUSCODE 200 - OK', function(done) {
            request
                .get('/api/validacoes')
                .end(function(err, res) {
                    expect(res.statusCode).to.be.eql(200)
                    done(err)
                })
        })

        it('DEVE RETORNAR ARRAY DO RES.BODY', function(done) {
            request
                .get('/api/validacoes')
                .end(function(err, res) {
                    expect(res.body).to.be.instanceof(Array)
                    done(err)
                })
        })

    })
})