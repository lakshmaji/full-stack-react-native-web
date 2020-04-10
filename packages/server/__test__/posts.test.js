const supertest = require('supertest');
const server = require('../app');


describe("Testing the posts API", () => {
    it("tests the base route and returns true for status", async done => {
        const response = await supertest(server).get('/');
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('API')
        done()
    });

})