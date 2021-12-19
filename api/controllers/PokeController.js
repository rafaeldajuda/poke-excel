const PokeModel = require('../models/Poke');

class PokeController {
    static async insertPokemon(poke){
        return await PokeModel.create(poke);
    }

    static async getPokemons() {
        return await PokeModel.find();
    }

    static async getPokemonByName(name){
        return await PokeModel.findOne({ name });
    }

    static async getPokemonByPokedexNumber(pokedex_number){
        return await PokeModel.findOne({ pokedex_number });
    }

    static async updatePokemonByName(name, poke){
        return await PokeModel.updateOne({ name }, poke);
    }

    static async getPokemonsByFilters(page, limit, filters){
        return await PokeModel.find(filters).skip(page).limit(limit);
    }
}

module.exports = PokeController;