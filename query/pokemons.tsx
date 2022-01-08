import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function pokemons() {
	const { data } = await client.query({
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

export async function pokemon({name}:any) {
	const { data } = await client.query({
		query: gql
			`query pokemon {
				pokemon(name:${name}) {
				  id
				  name
				  sprites {
					front_default
				  }
				  types{
					type{
					  name
					}
				  }
				}
			}`
	})

	return data.pokemon
}