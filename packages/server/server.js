const app = require('./app');
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port, server.address());
});

module.exports = server;
