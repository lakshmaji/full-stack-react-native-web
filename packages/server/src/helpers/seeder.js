const faker = require("faker");
const bcrypt = require('bcryptjs');
const databaseHelper = require('./database');
const PostModel = require('../post/Post')
const UserModel = require('../user/User')

databaseHelper.connect();


const NO_OF_USERS = 10;
const NO_OF_POSTS = 10;



const getRandomUserId = (users) => {
    const randomUser = faker.random.arrayElement(users);
    return randomUser._id;
}


const seedTables = async () => {
    let users;
    users = Array.from({ length: NO_OF_USERS }).map(_ => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        return {
            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName, lastName),
            password: bcrypt.hashSync('Master@123', 8)
        }
    })

    users = await UserModel.insertMany(users);

    Array.from({ length: NO_OF_POSTS }).forEach(async () => {
        const post = new PostModel({
            title: faker.lorem.word(),
            postContent: faker.lorem.paragraph(),
            createdBy: getRandomUserId(users),
            comments: []
        })
        await post.save();
        const comments = Array.from({ length: faker.random.number() }).map(() => {
            return {
                description: faker.lorem.paragraph(),
                post: post._id,
                createdBy: getRandomUserId(users)
            }
        })
        console.log(post.comments.length)
        post.comments.push(comments)
        console.log(post.comments.length)

        await post.save();
    })

}

seedTables();



