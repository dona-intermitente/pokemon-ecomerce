import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
//import { SelectButton } from 'primereact/selectbutton';
import { cardPokemonFavorite, cardPokemonShopping } from '../query/pokemons';
import Catalogue from '../components/Catalogue';
import { RadioButton } from 'primereact/radiobutton';

const User: NextPage = () => {
	const { data: session } = useSession()
	
	//const [option, setOption] = useState('MIS COMPRAS');
	const options = [{name:'MIS COMPRAS', key:1}, {name:'MIS FAVORITOS', key:2}];
	
	const [selectedCategory, setSelectedCategory] = useState(options[0]);

	const [favorites, setFavorites] = useState([])
	const [shopping, setShopping] = useState([])

	const user_id = session?.id
	const token = session?.jwt

	const getFavorites = async () => {
		const pokemon = await cardPokemonFavorite(user_id, token)
		setFavorites(pokemon)
	}

	const getShopping = async () => {
		const pokemon = await cardPokemonShopping(user_id, token)
		setShopping(pokemon)
		console.log(pokemon);
	}

	useEffect(() => {
		getFavorites()
		getShopping()
	},[])

	const category = options.map((category:any) => {
		return (
			<div key={category.key} className="p-field-radiobutton">
				<RadioButton 
					inputId={category.key}
					name="category"
					value={category}
					onChange={(e) => setSelectedCategory(e.value)} 
					checked={selectedCategory.key === category.key}/>
				<label htmlFor={category.key}>{category.name}</label>
			</div>
		)
	})

	return (
		<>
			{/*TODO: imitar estilos del boton
			<SelectButton value={option} options={options} onChange={(e) => setOption(e.value)} />
			*/}
			{category}
			{
				selectedCategory.name == 'MIS COMPRAS' ?
				<Catalogue data={shopping} onChange={()=>{}}/>
				: <Catalogue data={favorites} onChange={()=>getFavorites()}/>
			}
		</>
	)
}

export default User