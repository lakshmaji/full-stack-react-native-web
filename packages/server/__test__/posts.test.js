const supertest = require('supertest');
const server = require('../app');


describe("Testing the posts API", () => {
    it("tests the base route and returns true for status", async () => {
        const response = await supertest(server).get('/');
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('API')
    });

    it("Should not allow to create a post, as auth token was not passed", async () => {
        const response = await supertest(server).post('/api/posts').send({
            title: 'Bhagavad gita',
            postContent: 'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. ',
            createdBy: 'Some mock user'
        });
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('No token provided.');
    })

    it("Should be able to get posts ", async () => {
        const response = await supertest(server).get('/api/posts');
        expect(response.status).toBe(200);
        expect(response.body);
    })

})