const axios = require('axios');
let url="https://demoapisjsonserver.herokuapp.com/pokemons";

const getAllPokemons= async (req) => {
    try {
        let pokemons = await axios.get(url);
        // console.log(pokemons.data);
      return pokemons.data
    } catch (error) {
      console.error(error)
    }
  }

  const getPokemonById= async (id) => {
    try {
        let pokemons = await axios.get(url);
        let pokemon = pokemons.data.filter((poke) => {return poke.id == id});
        console.log(pokemon);
        return pokemon[0]
    } catch (error) {
      console.error(error)
    }
    
  }

  const addPokemon= async (req) => {
    try {
        let pokemons={};
        await axios.post(url, req.body)
        .then((res) => {
            pokemons = JSON.parse(JSON.stringify(res.data));
        })
        console.log(pokemons);
        return pokemons
    } catch (error) {
      console.error(error)
    }    
  }

  const updatePokemon= async (req) => {
    try {
        let pokemons={};
        console.log(`${url}/${req.params.id}`)
        await axios.patch(`${url}/${req.params.id}`, req.body)
        .then((res) => {
            pokemons = JSON.parse(JSON.stringify(res.data));
        })
        console.log(pokemons);
        return pokemons
    } catch (error) {
      console.error(error)
    }    
  }

  const deletePokemon= async (id) => {
    try {
        let pokemons={};
        console.log(`${url}/${id}`)
        await axios.delete(`${url}/${id}`)
        .then((res) => {
            pokemons = JSON.parse(JSON.stringify(res.data));
        })
        console.log(pokemons);
        return pokemons
    } catch (error) {
      console.error(error)
    }    
  }

  module.exports={
    getAllPokemons,
    getPokemonById,
    addPokemon,
    updatePokemon,
    deletePokemon
  }