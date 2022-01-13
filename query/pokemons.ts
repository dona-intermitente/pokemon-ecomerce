import { gql } from "@apollo/client";
import { clientPokemon, clientUser } from "../apollo-client";
import { favoriteList } from "./favorites";
import { shoppingList } from "./shopping";

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

export const POKEMON_TYPE = gql`query Pokemon($name: String!) {
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
				pokemonStocks(sort:"id",limit:10) {
					id
					cost
					quantity
				}
			}`,
		fetchPolicy: "no-cache"
	})
	return data.pokemonStocks
}

export async function cardPokemon(user_id: any, token: any) {
	const [pokemons, stock, favorites] = await Promise.all([pokemonsList(), pokemonStock(), favoriteList(user_id, token)])
	const data = pokemons.map((item: any, index: number) => {
		const newitem = {
			...item,
			cost: stock[index].cost,
			stock_id: stock[index].id,
			quantity: stock[index].quantity,
			favorite_id: favorites.find((val: any) => val.pokemon_id == item.id)?.id || null,
		}
		return newitem
	})
	return data
}

export async function cardPokemonFavorite(user_id: any, token: any) {
	const cardpokemons = await cardPokemon(user_id, token)
	const data = cardpokemons.filter((item: any) => item.favorite_id)
	return data
}

export async function cardPokemonShopping(user_id: any, token: any) {
	const [cardpokemons, shoppingLists] = await Promise.all([cardPokemon(user_id, token), shoppingList(user_id, token)])
	const shop = shoppingLists.map((item: any) => item.pokemon_id)
	const data = cardpokemons.filter((item: any) => shop.includes(item.id))
	return data
}

export async function quantityUpdate(stock_id: any, quantity: any ) {
	const data = await clientUser.mutate({
		mutation: gql
			`mutation UpdateQuantity($stock_id:ID!,$quantity:Long!){
			updatePokemonStock(
			  input:{
				where:{
				  id:$stock_id
				}
				data:{
				  quantity: $quantity
				}
			  }
			){
				pokemonStock{
				id
				pokemon_id
			  }
			}
		  }`,
		variables: { stock_id, quantity }
	})
	return data
}