const { Router } = require('express')
const router = Router()
const PokeController = require('../../controllers/PokeController');

// LISTA TODOS OS POKEMONS
router.get('/poke', async (req, res) => {
    try{
        const pokemons = await PokeController.getPokemons();
    
        res.status(200).json(pokemons);
    }catch(err){
        res.status(500).json(err);
    }
});

// PEGA UM POKEMON A PARTIR DO NUMERO DO POKEDEX
router.get('/poke/:pokedex_number', async (req, res) => {
    const { pokedex_number } = req.params;
    try{
        const pokemon = await PokeController.getPokemonByPokedexNumber(Number(pokedex_number));
    
        res.status(200).json(pokemon);
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/poke/filters', async (req, res) => {
    const { page, limit, filters } = req.body;

    try{
        if(typeof page != 'number' || typeof limit != 'number'){
            return res.status(400).json({ msg: 'invalid json filters' });
        }

        const newPage = Number(page) * Number(limit);

        const pokemons = await PokeController.getPokemonsByFilters(Number(newPage), Number(limit), filters);
        const pokemonsList = {
            page: newPage,
            limit,
            pokemons
        }

        res.status(200).json(pokemonsList)
    }catch(err){
        res.status(500).json(err.message);
    }
});





module.exports = router;