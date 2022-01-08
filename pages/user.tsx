import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Catalogue from '../components/Catalogue';
import { pokemons } from '../query/pokemons';

const User: NextPage = () => {
	const [dataPokemons,setDataPokemons] = useState([]);

	const getPokemons = async () => {
		const pokemon = await pokemons()
		setDataPokemons(pokemon);
	}

	useEffect( () => {
		getPokemons()
	},[]);

  return (
		<>
			<p>User</p>
    		<Catalogue data={dataPokemons}/>		
		</>
  )
}

export default User