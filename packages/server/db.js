const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test-rn-web', { useMongoClient: true });

// // Connect to mongoDB
// let mongoDBHost = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/test-rn-web";
// mongoose.connect(
//   mongoDBHost,
//   { useMongoClient: true }
// );
// mongoose.Promise = global.Promise;

// mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection Error...'));
