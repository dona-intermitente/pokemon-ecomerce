import type { NextPage } from 'next';
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { cardPokemon } from '../query/pokemons'
import Catalogue from '../components/Catalogue'

const Home: NextPage = () => {
	const { data: session } = useSession()
	const [ pokemons, setPokemons ] = useState([])
	
	const user_id = session?.id
	const token = session?.jwt	

	const getPokemon = async (user_id:any, token:any) => {
		const pokemon = await cardPokemon(user_id, token)
		setPokemons(pokemon)
	}
	//TODO eliminar despues hacer pruebas de estres
	/*useEffect( ()=>  {
		const id = setInterval(getPokemon, 1000)
		return () => clearInterval(id) 
	},[pokemons])*/

	useEffect( () => {
		getPokemon(user_id, token)
	},[pokemons])

	return ( 
		<Catalogue data={pokemons} onChange={() => {getPokemon(user_id, token)}}/>		
	)
}

export default Home