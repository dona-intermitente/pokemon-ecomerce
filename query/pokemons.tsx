import { gql } from "@apollo/client";
import { clientPokemon, clientUser } from "../apollo-client";

async function pokemonsList() {
	const { data } = await clientPokemon.query({
		query: gql
			`query Pokemons{ 
				pokemons(limit:10){
					results{
						id
						name
						image
					}
				}
			}`
	})

	return data.pokemons.results
}

export const POKEMON_TYPE =  gql`query Pokemon($name: String!) {
    pokemon(name:$name) {
        types{
            type{
                name
            }
        }
    }
}`

async function pokemonStock() {
	const { data } = await clientUser.query({
		query: gql
			`query PokemonStock {
				pokemonStocks(limit:10) {
					pokemon_id
					cost
					quantity
				}
			}`
	})

	return data.pokemonStocks
}

export async function cardPokemon() {
	const [pokemons, stock,] = await Promise.all([pokemonsList(), pokemonStock()])
	const data = pokemons.map((item: any, index: number) => {
		const newitem = { ...item,
			cost: stock[index].cost,
			quantity: stock[index].quantity,
		}
		return newitem
	})
	return data
}