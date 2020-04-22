const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test-rn-web', { useMongoClient: true });

// // Connect to mongoDB
// let mongoDBHost = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/test-rn-web";
// mongoose.connect(
//   mongoDBHost,
//   { useMongoClient: true }
// );
// mongoose.Promise = global.Promise;

// mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection Error...'));

const connect = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(
                process.env.NODE_ENV === 'test' ? global.__DB_URL__ : process.env.DB_URL,
                {
                    // useNewUrlParser: true,
                    // useCreateIndex: true,
                    // useFindAndModify: false,
                    // useUnifiedTopology: true,
                    useMongoClient: true
                }
            );
        }
        catch (err) {
            console.log('Monogo connect error ', err);
        }
    }
};

const truncate = async () => {
    if (mongoose.connection.readyState !== 0) {
        const { collections } = mongoose.connection;

        const promises = Object.keys(collections).map(collection =>
            mongoose.connection.collection(collection).deleteMany({})
        );

        try {
            await Promise.all(promises);
        } catch (err) {
            console.log('Truncate err ', err);
        }
    }
};

const disconnect = async () => {
    if (mongoose.connection.readyState !== 0) {
        try {

            await mongoose.disconnect();
        } catch (err) {
            console.log('Mongo disconnet error ', err);
        }
    }
};

module.exports = {
    connect,
    truncate,
    disconnect,
};