const expect = require('expect');
const utilities= require('../server/util/utilities');

describe("get all pokemons",  () =>{
    test("should get a pokemon if one exists", async() => {
        let pokemons=await utilities.getAllPokemons({});
        expect(Object.keys(pokemons).length).not.toBe(0)
    })
})
