import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Catalogue from '../components/Catalogue';
import { pokemons } from '../query/pokemons';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const [dataPokemons,setDataPokemons] = useState([]);

	const getPokemons = async () => {
		const pokemon = await pokemons()
		setDataPokemons(pokemon);
	}

	useEffect( () => {
		getPokemons()
	},[]);

  return (
    <Catalogue data={dataPokemons}/>
  )
}

export default Home