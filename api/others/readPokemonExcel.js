const readXlsxFile = require('read-excel-file/node');
const filePath = '/home/rafael/projetos-nodejs/pokemon-go-excel/api/archives/Pokemon Go.xlsx'
const schema = require('./schemas/pokeSchema');
const PokeController = require('../controllers/PokeController');

console.log('start of proccess');
async function readExcelFile(filePath, schema) {
    await readXlsxFile(filePath, { schema }).then(async ({ rows, errors }) => {
        for(let element of rows){
            try{

                if(!await PokeController.getPokemonByName(element.name)){
                    const poke = await PokeController.insertPokemon(element);
                    console.log(poke.name, ' created');
                }else{
                    await PokeController.updatePokemonByName(element.name, element);
                    console.log(element.name, ' updated');
                }
            }catch(err){
                console.log(err.message);
            }
        }
    });
}

readExcelFile(filePath, schema)
    .then(() => {
        console.log('end of proccess');
        process.exit(0);
    });