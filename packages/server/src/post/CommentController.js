const Post = require('./Post');
const Comment = require('./Comment');

class CommentController {

    // CREATES A NEW COMMENT
    async store(req, res) {
        try {
            const post = await Post.findById(req.params.id);

            const comment = new Comment({
                description: 'Lorem ipsum dolor sit amet, per ut fugit vocibus repudiandae. Sea forensibus disputationi te. Vix unum inani eu',
                createdBy: req.userName,
                post: post._id
            })
            await comment.save()
            post.comments.push(comment)
            await post.save()

            return res.json({
                message: 'Comment has been posted successfully'
            });
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

    // RETURNS ALL THE COMMENT IN THE DATABASE FOR a GIVEN POST
    async index(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (post) {
                return res.send(post.comments);
            } return res.statu(404).json({ message: 'Post Not found' })
        } catch (err) {
            return res.status(400).json({ message: 'Some error' });
        }
    }

    // DELETES A COMMENT FROM THE DATABASE FOR GIVEN POST
    async delete(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (post) {
                // TODO: How do i delet particular comment

                return res.send({ message: 'deleted', id: comment._id });
            } return res.statu(400).json({ message: 'Post Not found' })
        } catch (err) {
            return res.status(400).json({ message: 'Some error' });
        }
    }

    // UPDATES A SINGLE COMMENT IN THE DATABASE FOR A GIVEN POST
    // Added VerifyToken middleware to make sure only an authenticated Post can put to this route
    async update(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            try {
                if (post) {
                    // TODO: How do i delet particular comment
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

module.exports = new CommentController();
