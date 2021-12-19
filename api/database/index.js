const mongoose = require('mongoose');
const config = require('config');

const baseUrl = config.get('database.base_url');
const databaseName = config.get('database.database_name');
const username = config.get('database.username');
const password = config.get('database.password');

mongoose.connect(`mongodb://${baseUrl}/${databaseName}`, {
    auth:{
        username: username,
        password: password
    },
    authSource: 'admin',
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;