const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: '{PATH} is required'
    },
    postContent: String,
    createdBy: String,
    comments: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
    ]
});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');