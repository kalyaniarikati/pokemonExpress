const express = require('express');
const router = express.Router();
const {getPokemons, getPokemon, setPokemon, changePokemon, removePokemon} = require('../controllers/poke_controller');

// get all posts
router.get("/", getPokemons)

// get a post
router.get("/:id", getPokemon)

// add a post route
router.post("/", setPokemon)

// change a post route
router.put("/:id", changePokemon)

// delete a post route
router.delete("/:id", removePokemon)


module.exports=router