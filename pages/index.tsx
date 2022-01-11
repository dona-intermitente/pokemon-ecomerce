import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react';
import Catalogue from '../components/Catalogue';
import { cardPokemon } from '../query/pokemons';
import styles from '../styles/Home.module.css'

const Home: NextPage = ({pokemon}:any) => {
	const { data: session, status } = useSession()

	return (
		<div>
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
			<Catalogue data={pokemon} />
		</div>
	)
}

export const getStaticProps = async () => {
	const pokemon = await cardPokemon()
	 return {props:{pokemon:pokemon}}
}

export default Home