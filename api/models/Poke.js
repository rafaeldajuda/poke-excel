const mongodb = require('../database');

const PokeSchema = new mongodb.Schema({
    'name': {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    'pokedex_number': {
        type: Number,
        required: true
    },
    'img_name': {
        type: String,
        required: false
    },
    'generation': {
        type: Number,
        required: false
    },
    'evolution_stage': {
        type: String,
        required: false
    },
    'evolved': {
        type: Number,
        required: false
    },
    'family_id': {
        type: Number,
        required: false
    },
    'cross_gen': {
        type: Number,
        required: false
    },
    'type_1': {
        type: String,
        required: false
    },
    'type_2': {
        type: String,
        required: false
    },
    'weather_1': {
        type: String,
        required: false
    },
    'weather_2': {
        type: String,
        required: false
    },
    'stat_total': {
        type: Number,
        required: false
    },
    'atk': {
        type: Number,
        required: false
    },
    'def': {
        type: Number,
        required: false
    },
    'sta': {
        type: Number,
        required: false
    },
    'legendary': {
        type: Number,
        required: false
    },
    'aquireable': {
        type: Number,
        required: false
    },
    'spawns': {
        type: Number,
        required: false
    },
    'regional': {
        type: Number,
        required: false
    },
    'raidable': {
        type: Number,
        required: false
    },
    'hatchable': {
        type: Number,
        required: false
    },
    'shiny': {
        type: Number,
        required: false
    },
    'nest': {
        type: Number,
        required: false
    },
    'new': {
        type: Number,
        required: false
    },
    'not_gettable': {
        type: Number,
        required: false
    },
    'future_evolve': {
        type: Number,
        required: false
    },
    '100_cp_40': {
        type: Number,
        required: false
    },
    '100_CP_39': {
        type: Number,
        required: false
    }
});

const Poke = mongodb.model('poke', PokeSchema);

module.exports = Poke;