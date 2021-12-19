const PokeRouter = require('./PokeRoute/pokeRoute')

module.exports = app => {
    app.use('/api', PokeRouter);
}