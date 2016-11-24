describe('TESTE PARA A ENTIDADE CALIBRACAO', function() {

    describe('TESTE PARA A API /api/calibracoes', function() {

        it('DEVE RETORNAR STATUSCODE 200 - OK', function(done) {
            request
                .get('/api/calibracoes/')
                .end(function(err, res) {
                    expect(res.statusCode).to.be.eql(200)
                    done(err)
                })
        })

        it('DEVE RETORNAR ARRAY DO RES.BODY', function(done) {
            request
                .get('/api/calibracoes/')
                .end(function(err, res) {
                    expect(res.body).to.be.instanceof(Array)
                    done(err)
                })
        })

        it('DEVE CRIAR UM NOVO OBJETO', function(done) {

            const defaultCal = {
                cal_datacalibracao:'2016-11-17',
                cal_certificado:"assinado",
                cal_periodicidade:10,
                cal_laudofinal:"aprovado"
            }

            request
                .post('/api/calibracoes')
                .send(defaultCal)
                .end(function(err,res) {
                    expect(res.body.cal_datacalibracao).to.be.eql(defaultCal.cal_datacalibracao)
                    expect(res.body.cal_certificado).to.be.eql(defaultCal.cal_certificado)
                    expect(res.body.cal_periodicidade).to.be.eql(defaultCal.cal_periodicidade)
                    expect(res.body.cal_laudofinal).to.be.eql(defaultCal.cal_laudofinal)
                    done(err)
                })
        })

        it('DEVE ATUALIZAR UMA DETERMINADA CALIBRACAO', function(done) {

            const updatedCAl = {
                cal_datacalibracao:'2016-11-15',
                cal_certificado:"updated",
                cal_periodicidade:99,
                cal_laudofinal:"updated aprovado"
            }

            request
                .put('/api/calibracoes/id/1')
                .send(updatedCAl)
                .end(function(err, res) {
                    expect(res.body).to.be.eql([1])
                    done(err)
                })
        })

        it('DEVE LISTAR TODAS AS CALIBRACOES_ITEM', function(done) {

            request
                .get('/api/calibracoes/itens')
                .end(function(err, res) {
                    expect(res.body).to.be.instanceof(Array)
                    done(err)
                })
        })

        it('DEVE LISTAR TODAS AS CALIBRACOES COM JOIN', function(done) {

            request
                .get('/api/calibracoes/join')
                .end(function(err, res) {
                    console.log('resposta: ',res.body)
                    done(err)
                })
        })
    })
})