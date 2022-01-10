import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Catalogue from '../components/Catalogue';
import { pokemons, pokemonStock } from '../query/pokemons';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const { data: session, status } = useSession()
	const [dataPokemons, setDataPokemons] = useState([]);
	const [dataPokemonStock, setDataPokemonStock] = useState([]);

	const getPokemons = async () => {
		const pokemon = await pokemons()
		setDataPokemons(pokemon);
	}

	const getPokemonStock = async () => {
		const pokemonstock1 = await pokemonStock()
		setDataPokemonStock(pokemonstock1);
		console.log(pokemonstock1)
	}

	useEffect(() => {
		getPokemons()
		getPokemonStock()
	}, []);

	return (
		<>
			<div>
				{!session && <>
					Not signed in <br />
					<button onClick={() => signIn()}>Sign in</button>
				</>}
				{session && <>
					Signed in as {session.user?.email} <br />
					<button onClick={() => signOut()}>Sign out</button>
				</>}
			</div>
			<Catalogue data={dataPokemons} />
		</>
	)
}

export default Home