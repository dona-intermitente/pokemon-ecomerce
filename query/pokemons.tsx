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