
const supertest = require('supertest');
const app = require('../app');

describe("App", () => {
    it("shoud be able to receive response from base API", async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('API')
    });
})