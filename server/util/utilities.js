let User = require("../model/comments");
const fetch = require("node-fetch");
const axios = require('axios');
let url="https://demoapisjsonserver.herokuapp.com/pokemons";

const getAllPokemons= async (req) => {
    try {
        let pokemons = await axios.get(url);
        console.log(Object.keys(pokemons.data).length);
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

  const addComment = async function() {
    const dataUrl = 'https://jsonplaceholder.typicode.com/comments';
        const response = await fetch(dataUrl);
        const data = await response.json();
        let json = JSON.stringify( data, null, 2 );
        // console.log(json);
        
        let load = data.map(function(x) { return {name: x.name,
          email: x.email,
          comment: x.body} } );
          // console.log(load)
      // save model to database
      User.insertMany(load).then(function(){ 
        console.log("Data inserted")  // Success 
    }).catch(function(error){ 
        console.log(error)      // Failure 
    });
        
        // json.forEach(async (obj) =>{
        //   let newComment = {
        //     name: obj.name,
        //     email: obj.email,
        //     comment: obj.body
        // }
        // await new User(newComment)
        // })
  }

  // addComment();
  module.exports={
    getAllPokemons,
    getPokemonById,
    addPokemon,
    updatePokemon,
    deletePokemon,
    addComment
  }