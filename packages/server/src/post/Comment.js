const mongoose = require('mongoose');

const commentModel = mongoose.Schema({
    description: {
        type: String,
        require: '{PATH} is required !'
    },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    createdBy: String // can be replaced with user id
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentModel);