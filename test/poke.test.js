const expect = require('expect');
const utilities= require('../server/util/utilities');

describe("get all pokemons",  () =>{
    test("should get a pokemon if one exists", async() => {
        let pokemons=await utilities.getAllPokemons({});
        expect(Object.keys(pokemons).length).not.toBe(0)
    })
})

describe("get all pokemons",  () =>{
    test("should get a pokemon if one exists", async() => {
        let pokemons=await utilities.getAllPokemons({});
        expect(Object.keys(pokemons).length).not.toBe(0)
    })
})

describe("get pokemon by id",  () =>{
    const req = {
        params: {
            id: 6
        }
    }
    test("should get a pokemon if one exists", async() => {
        let pokemons=await utilities.getPokemonById(req.params.id);
        expect(pokemons).not.toBeNull();
    })
})
