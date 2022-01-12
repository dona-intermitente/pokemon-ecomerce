import { gql } from "@apollo/client";
import { clientPokemon, clientUser } from "../apollo-client";
import { favoriteList } from "./favorites";

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
					cost
					quantity
				}
			}`
	})
	return data.pokemonStocks
}

export async function cardPokemon(user_id:any, token:any) {
	const [pokemons, stock, favorites] = await Promise.all([pokemonsList(), pokemonStock(), favoriteList(user_id,token)])
	const data = pokemons.map((item: any, index: number) => {
		const newitem = { ...item,
			cost: stock[index].cost,
			quantity: stock[index].quantity,
			favorite_id: favorites.find((val:any)=> val.pokemon_id == item.id )?.id || null,
		}
		return newitem
	}) 
	return data
}

export async function cardPokemonFavorite(user_id:any, token:any) {
	const cardpokemons = await cardPokemon(user_id, token)
	const data = cardpokemons.filter((item:any)=> item.favorite_id )
	return data
}