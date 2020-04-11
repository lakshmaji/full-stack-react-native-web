const Post = require('./Post');
const Comment = require('./Comment');

class PostController {

    // CREATES A NEW POST
    async store(req, res) {
        try {
            const post = new Post({
                title: req.body.title,
                postContent: req.body.postContent,
                createdBy: req.userName
            });

            await post.save();

            return res.json({
                _id: post._id,
                title: post.title,
                postContent: post.postContent,
                createdBy: post.createdBy,
            });
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

    // RETURNS ALL THE POSTS IN THE DATABASE
    async index(req, res) {
        try {
            const posts = await Post.find();
            return res.send(posts);
        } catch (err) {
            return res.status(400).json({ error: 'Some error' });
        }
    }

    // GETS A SINGLE POST FROM THE DATABASE
    async show(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            return res.send(post);
        } catch (err) {
            return res.status(400).json({ error: 'Some error' });
        }
    }

    // DELETES A POST FROM THE DATABASE
    async delete(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (post) {
                const removedComment = await Comment.remove({ post: req.params.commentId })
                console.log('is comment removed ', removedComment)
                // TODO: must remove all comments
                if (removedComment) {
                    await post.remove();
                }
            }
            return res.send({ message: 'deleted', id: post._id });
        } catch (err) {
            return res.status(400).json({ error: 'Post not found' });
        }
    }

    // UPDATES A SINGLE POST IN THE DATABASE
    // Added VerifyToken middleware to make sure only an authenticated Post can put to this route
    async update(req, res) {
        try {
            const post = await Post.findById(req.params.id);

            try {

                if (post) {
                    const updatedPost = await post.update(req.body);
                    return res.send(updatedPost)
                }
                return res.statu(500).send({ message: 'some error' })

            } catch (e) {
                return res.status(500).send({ message: 'There was a problem updating the post.' })
            }
        } catch (err) {
            return res.status(400).json({ message: 'Post not found' });
        }
    }

}

module.exports = new PostController();
