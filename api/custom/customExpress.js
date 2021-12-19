const express = require('express');
const routes = require('../routes')

module.exports = () => {
    const app = express();
    app.use(express.json());

    //MIDDLEWARES

    //ROUTES
    routes(app);

    return app;
}