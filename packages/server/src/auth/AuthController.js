var User = require('../user/User');

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../../config'); // get config file
class AuthController {

  async login(req, res) {
    try {

      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(404).json({ message: 'No user found.' });

      // check if the password is valid
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

      // if user is found and password is valid
      // create a token
      const token = jwt.sign({ id: user._id, name: user.name }, config.secret, {
        expiresIn: 60 * 60 // expires in 1 hour
      });

      // return the information including token as JSON
      return res.status(200).send({ auth: true, token: token });


    } catch (err) {
      return res.status(500).json({ message: 'Error on the server.' });
    }

  }

  async delete(req, res) {
    return res.status(200).send({ auth: false, token: null });
  };

  async store(req, res) {

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    try {

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      });
      await user.save();

      // if user is registered without errors
      // create a token
      const token = jwt.sign({ id: user._id, name: user.name }, config.secret, {
        expiresIn: '1h' // expires in 1 hour
      });
      return res.status(200).send({ auth: true, token });

    } catch (err) {
      return res.status(500).json({ message: "There was a problem registering the user`." });
    }


  }
  async show(req, res) {
    try {
      const user = await User.findById(req.userId, { password: 0 });
      return res.send(user);
    } catch (err) {
      return res.status(400).json({ error: 'User not found' });
    }
  }
}

module.exports = new AuthController();
