const supertest = require('supertest');
const server = require('../../app');

let token;

describe("load app instance and get token", () => {

    beforeAll(async () => {
        const response = await supertest(server)
            .post('/api/auth/register')
            .send({
                email: 'lakshmaji@gmail.com',
                password: 'Master@123',
                name: 'Lakshmaji'
            });
        if (response.body) {
            token = response.body.token;
        }
    })

    // afterAll(async () => {
    //     if (server.close) {
    //         await server.close()
    //     }
    // })

    // This works too
    // beforeEach(async () => {
    //     jest.setTimeout(60000)
    // })

    describe("App base api check", () => {
        it("tests the base route and returns true for status", async () => {
            const response = await supertest(server).get('/');
            expect(response.status).toBe(200)
            expect(response.body.message).toBe('API')
        });
    })


    describe("Testing the posts API", () => {
        it("Should not allow to create a post, as auth token was not passed", async () => {
            const response = await supertest(server).post('/api/posts').send({
                title: 'Bhagavad gita',
                postContent: 'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. ',
            });
            expect(response.status).toBe(401);
            expect(response.body.message).toBe('No token provided.');
        })

        it("Should return empty posts ", async () => {
            const response = await supertest(server).get('/api/posts');
            expect(response.status).toBe(200);
            expect(response.body);
            expect(response.body.length).toBe(0);
        })

        it("Should be able to create a post", async () => {
            // https://github.com/visionmedia/supertest/issues/398#issuecomment-366403045 -> related headers
            const response = await supertest(server).post('/api/posts').send({
                title: 'Bhagavad gita',
                postContent: 'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. ',
            }).set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            // expect(response.type).toBe('application/json');
        })

        it("Should be able to get posts ", async () => {
            const response = await supertest(server).get('/api/posts');
            console.log(response.body)
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(0);
        })

    })

})
