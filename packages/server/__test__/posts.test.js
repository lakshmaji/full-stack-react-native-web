const supertest = require('supertest');
const app = require('../app');

const PostModel = require('../src/post/Post');

let token;

describe("Post", () => {

    beforeAll(async () => {
        const response = await supertest(app)
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

    describe("API", () => {
        it("Should not allow to create a post, as auth token was not passed", async () => {
            const response = await supertest(app).post('/api/posts').send({
                title: 'Bhagavad gita',
                postContent: 'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. ',
            });
            expect(response.status).toBe(401);
            expect(response.body.message).toBe('No token provided.');
        })

        it("Should return empty posts ", async () => {
            const response = await supertest(app).get('/api/posts');
            expect(response.status).toBe(200);
            expect(response.body);
            expect(response.body.length).toBe(0);
        })

        it("Should be able to create a post", async () => {
            // https://github.com/visionmedia/supertest/issues/398#issuecomment-366403045 -> related headers
            const response = await supertest(app).post('/api/posts').send({
                title: 'Bhagavad gita',
                postContent: 'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. ',
            }).set('Authorization', `Bearer ${token}`);
            expect(response.status).toBe(200);
            // expect(response.type).toBe('application/json');
        })

        it("Should be able to get posts ", async () => {
            const post = new PostModel({
                title: 'Javascript by MDN',
                postContent: 'The static import statement is used to import bindings which are exported by another module.',
                createdBy: 'Some fake user'
            })
            await post.save();

            const response = await supertest(app).get('/api/posts');
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(1);
        })

        it('should be able to delete post', async () => {

            const post = new PostModel({
                title: 'Javascript by MDN',
                postContent: 'The static import statement is used to import bindings which are exported by another module.',
                createdBy: 'Some fake user'
            })
            await post.save();
            const response = await supertest(app)
                .delete(`/api/posts/${post.id}`)
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
        })

    })

})
