const User = require('./User');

class UserController {
    // CREATES A NEW USER
    async store(req, res) {
        try {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            await user.save();

            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

    // RETURNS ALL THE USERS IN THE DATABASE
    async index(req, res) {
        try {
            const users = await User.find();
            if (users.length)
                return res.send(users);
            return res.send([]);
        } catch (err) {
            return res.status(400).json({ error: 'User not found' });
        }
    }

    // GETS A SINGLE USER FROM THE DATABASE
    async show(req, res) {
        try {
            const user = await User.findById(req.params.id);
            return res.send(user);
        } catch (err) {
            return res.status(400).json({ error: 'User not found' });
        }
    }

    // DELETES A USER FROM THE DATABASE
    async delete(req, res) {
        try {
            const user = await User.findById(req.params.id);

            if (user) {
                await user.remove();
            }

            return res.send({ message: 'deleted' });
        } catch (err) {
            return res.status(400).json({ error: 'User not found' });
        }
    }


    // UPDATES A SINGLE USER IN THE DATABASE
    // Added VerifyToken middleware to make sure only an authenticated user can put to this route
    async update(req, res) {
        try {
            const user = await User.findById(req.params.id);

            try {

                if (user) {
                    const updatedUser = await user.updateOne(req.body);
                    return res.send(updatedUser)
                }
                return res.statu(500).send({ message: 'some error' })

            } catch (e) {
                return res.status(500).send({ message: 'There was a problem updating the user.' })
            }
        } catch (err) {
            return res.status(400).json({ message: 'User not found' });
        }
    }
}

module.exports = new UserController();
