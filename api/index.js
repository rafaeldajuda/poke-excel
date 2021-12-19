const customExpress = require('./custom/customExpress');
const config = require('config');

const app = customExpress();
const port = config.get('api.port');

app.listen(port, () => {
    console.log(`server port ${port}`);
})