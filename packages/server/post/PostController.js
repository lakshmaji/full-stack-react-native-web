var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Post = require('./Post');


// CREATES A NEW POST
router.post('/', VerifyToken, function (req, res) {
    Post.create({
        title: req.body.title,
        postContent: req.body.postContent,
        createdBy: req.userName
    },
        function (err, post) {
            if (err) return res.status(500).send({ message: "There was a problem adding the information to the database." });
            res.status(200).send(post);
        });
});

// RETURNS ALL THE POSTS IN THE DATABASE
router.get('/', function (req, res) {
    Post.find({}, function (err, posts) {
        if (err) return res.status(500).send({ message: "There was a problem finding the posts." });
        res.status(200).send(posts);
    });
});

// GETS A SINGLE POST FROM THE DATABASE
router.get('/:id', function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return res.status(500).send("There was a problem finding the post.");
        if (!post) return res.status(404).send("No post found.");
        res.status(200).send(post);
    });
});

// DELETES A POST FROM THE DATABASE
router.delete('/:id', VerifyToken, function (req, res) {
    Post.findByIdAndRemove(req.params.id, function (err, post) {
        if (err) return res.status(500).send({ message: "There was a problem deleting the post." });
        res.status(200).send({ message: 'deleted', id: post._id });
    });
});

// UPDATES A SINGLE POST IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated Post can put to this route
router.put('/:id', /* VerifyToken, */ function (req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, post) {
        if (err) return res.status(500).send("There was a problem updating the post.");
        res.status(200).send(post);
    });
});


module.exports = router;