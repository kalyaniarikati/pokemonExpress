const express = require('express');
const router = express.Router();
const {getPokemons, getPokemon, setPokemon, changePokemon, removePokemon} = require('../controllers/poke_controller');
const {getCommentsByEmail} = require('../controllers/comments_controller');

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

// get comments
router.post("/",getCommentsByEmail)

// add a comment to pokemon
// router.post('/:id/comments', makeComment)


module.exports=router