const assert = require('assert');
const Supertest = require('supertest');
const supertest = Supertest("http://localhost:5001/challengeml-8e9b9/us-central1");

describe(`VALIDACION DE LA API (Ubicacion api: http://localhost:5001/challengeml-8e9b9/us-central1` , function(){
    describe('Endpoint /mutant/', () => {
        it('Si se envia un adn mutante debe retornar 200 OK', async () => {
            try{
                await supertest
                .post('/mutant/')
                .send({
                    "dna": ["AAAATTCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA"]
                })
                .expect(200)
            }catch(err){
                assert.fail(err.message, 200,`La api ubicada en ${process.env.BASE_URL} no esta iniciada`)
            }
        });
        it('Si se envia un adn humano debe retornar 403 Forbidden', async () => {
            try{
                await supertest
                    .post('/mutant/')
                    .send({
                        "dna": ["ATCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA"]
                    })
                    .expect(403)
            }catch(err){
                assert.fail(err.message, 200,`La api ubicada en ${process.env.BASE_URL} no esta iniciada`)
            }
        });
        it('Si se envia una matriz erronea se retornar un 400 Bad Request', async () => {
            try{
                await supertest
                    .post('/mutant/')
                    .send({
                        "dna": ["8TCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA", "ATCGATCG", "GCTAGCTA"]
                    })
                    .expect(400)
            }catch(err){
                assert.fail(err.message, 200,`La api ubicada en ${process.env.BASE_URL} no esta iniciada`)
            }
        });
    });
})