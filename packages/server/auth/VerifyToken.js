var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  // var token = req.headers['x-access-token'];
  const token = (req.headers.authorization || '').split(' ')[1];

  if (!token)
    // return res.status(403).send({ auth: false, message: 'No token provided.' });
    return res.status(401).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function (err, decoded) {
    console.log(decoded)
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    req.userName = decoded.name;
    next();
  });

}

module.exports = verifyToken;