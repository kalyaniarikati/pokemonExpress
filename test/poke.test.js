const expect = require('expect');
const utilities= require('../server/util/utilities');

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



  describe("addPokemon", () => {
	test("should add a poke", async () => {
        // add the post again because setupData will clear the one we created
        const req = {
			body: {
                "id": 8,
                "name": "pinsir",
                "types": [
                  {
                    "slot": 1,
                    "type": "[Object]"
                  },
                  {
                    "slot": 2,
                    "type": "[Object]"
                  }
                ],
                "image": "https://pokeres.bastionbot.org/images/pokemon/127.png"
              }
		}
		await utilities.addPokemon(req)
        let pokies = await utilities.getAllPokemons({})
        let val = (Object.keys(pokies).filter(function(key) {
             pokies[key] === 8
          }));
          console.log(val)
		expect(val).toBeTrythy();
	})
})