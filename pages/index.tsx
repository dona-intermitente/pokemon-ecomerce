import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Catalogue from '../components/Catalogue';
import { pokemons } from '../query/pokemons';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const { data: session, status } = useSession()
	const [dataPokemons, setDataPokemons] = useState([]);

	const getPokemons = async () => {
		const pokemon = await pokemons()
		setDataPokemons(pokemon);
	}

	useEffect(() => {
		getPokemons()
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