var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
    title: String,
    postContent: String,
    createdBy: String
});
mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');