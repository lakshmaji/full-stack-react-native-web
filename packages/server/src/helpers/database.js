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
};

const truncate = async () => {
    if (mongoose.connection.readyState !== 0) {
        const { collections } = mongoose.connection;

        const promises = Object.keys(collections).map(collection =>
            mongoose.connection.collection(collection).deleteMany({})
        );

        await Promise.all(promises);
    }
};

const disconnect = async () => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
};

module.exports = {
    connect,
    truncate,
    disconnect,
};