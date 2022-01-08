import type { NextPage } from 'next'
import { SelectButton } from 'primereact/selectbutton';
import { useEffect, useState } from 'react';
import Catalogue from '../components/Catalogue';
import { pokemons } from '../query/pokemons';

const User: NextPage = () => {
	const [dataPokemons,setDataPokemons] = useState([]);
	const [value1, setValue1] = useState('MIS COMPRAS');
	const options = ['MIS COMPRAS', 'MIS FAVORITOS'];

	const getPokemons = async () => {
		const pokemon = await pokemons()
		setDataPokemons(pokemon);
	}

	useEffect( () => {
		getPokemons()
	},[]);

  return (
		<>
			<SelectButton value={value1} options={options} onChange={(e) => setValue1(e.value)}/>
			{
				value1 == 'MIS COMPRAS' ? <h1>compras</h1> : <h1>favoritos</h1>  
			}
			<Catalogue data={dataPokemons}/>		
		</>
  )
}

export default User