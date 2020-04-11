const app = require('./app');
const port = process.env.NODE_APP_PORT || 3000;

app.listen(port, () => {
    console.log('server started ..........')
});