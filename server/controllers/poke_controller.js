const {getAllPokemons, getPokemonById, addPokemon, updatePokemon, deletePokemon} = require('../util/utilities');

const getPokemons = async (req, res) => {
    let pokemons = await getAllPokemons(req);
    console.log(pokemons);
    res.send(pokemons)
}

const getPokemon = async (req, res) => {
    let poke = await getPokemonById(req.params.id)
    if(poke)
        res.send(poke)
        else{
            res.status(404)
            res.send(req.err)
        }
}

const setPokemon = async (req, res) => {
    let poke=await addPokemon(req)
    if(poke)
    {
        res.status(201)
        res.send(poke)
    }
    else{
        res.status(404)
        res.send(req.err)
    }
}

const changePokemon = async (req, res) => {
	let poke = await updatePokemon(req)
	if (poke) {
		res.status(200)
		res.send(poke)
	} else {
		res.status(500)
		res.send(`Error occurred: ${req.error}`)
	}
}

const removePokemon = async (req, res) => {
	let pokemons = await deletePokemon(req.params.id)
	if (pokemons) {
		res.status(200)
		res.send(pokemons)
	} else {
		res.status(500)
		res.send(`Error occurred: ${req.error}`)
	}
}
module.exports={
    getPokemons, 
    getPokemon, 
    setPokemon, 
    changePokemon, 
    removePokemon
}