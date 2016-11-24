describe('TESTES DE INTEGRAÇÃO PARA A ENTIDADE INSTRUMENTOS', function() {

    describe('TESTE PARA A ROTA /api/instrumentos', function() {

        it('DEVE RETORNAR STATUSCODE 200 - OK', function(done) {
            request
                .get('/api/instrumentos/')
                .end(function(err,res) {
                    expect(res.statusCode).to.be.eql(200)
                    done(err)
                })
        })


        it('DEVE RETORNAR ARRAY COMO INSTANCEOF DO BODY', function(done) {
            request
                .get('/api/instrumentos/')
                .end(function(err,res) {
                    expect(res.body).to.be.instanceof(Array)
                    done(err)
                })
        })

        it('DEVE CRIAR UM NOVO OBJETO', function(done) {

            const defaultInstrumento = {
                ins_prcod:100,
                ins_prsdcond:101,
                ins_pecod:102,
                ins_prdescricao:'sanfona',
                ins_prdtinc:'2016-11-17 14:00:00',
                ins_prativo:103,
                ins_localservico:'ab',
                ins_tag:'gonzaga',
                ins_nro_serie:'serie 1',
                ins_periodicidade:10,
                ins_dtult:'2016-11-17',
                ins_dtprox_calibracao:'2016-12-20',
                ins_nro_certificacao:'profissional',
                ins_observacao:'pneu bom',
                ins_marca:'gioanine',
                ins_dtinc:'2016-11-17 14:00:00',
                ins_dtalt:'2016-11-25 14:00:00',
                ins_usuario:'luiz',
                ins_codinterno:'2000',
                ins_compdescricao:'sanfona 200x150',
                ins_localizacao:'nordeste',
                ins_modelo:'qualit',
                ins_setor:'almoxarife',
                ins_pontos:'250',
                ins_resolucao:'200x600',
                ins_aceitacao:'alta',
                ins_tolerancia:'zero'
            }

            request
                .post('/api/instrumentos')
                .send(defaultInstrumento)
                .end(function(err,res) {
                    expect(res.body.ins_prcod).to.be.eql(defaultInstrumento.ins_prcod)
                    expect(res.body.ins_prsdcond).to.be.eql(defaultInstrumento.ins_prsdcond)
                    expect(res.body.ins_prdescricao).to.be.eql(defaultInstrumento.ins_prdescricao)
                    expect(res.body.ins_prativo).to.be.eql(defaultInstrumento.ins_prativo)
                    done(err)
                })
        })

        it('DEVE ATUALIZAR UM DETERMINADO OBJETO', function(done) {

            const updatedInstrumento = {
                ins_prdescricao:'sanfona'
            }

             request
                 .put('/api/instrumentos/id/21')
                 .send(updatedInstrumento)
                 .end(function(err, res) {
                     expect(res.body).to.be.eql([1])
                     done(err)
                 })
         })
    })



})

