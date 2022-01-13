import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
//import { SelectButton } from 'primereact/selectbutton';
import { cardPokemonFavorite, cardPokemonShopping } from '../query/pokemons';
import Catalogue from '../components/Catalogue';
import { RadioButton } from 'primereact/radiobutton';
import Styles from '../styles/User.module.css'
import StylesCard from '../styles/CardProduct.module.css'
import { Card } from 'primereact/card';
import MyFavorite from '../components/MyFavorite';
import { Image } from 'primereact/image';

const User: NextPage = () => {
	const { data: session } = useSession()

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
	}

	useEffect(() => {
		getFavorites()
		getShopping()
	},[])

	const category = options.map((category:any) => {
		return (
			<div key={category.key} className={Styles.container + " p-field-radiobutton"}>
				<RadioButton 
					className={Styles.radio}
					inputId={category.key}
					name="category"
					value={category}
					onChange={(e) => setSelectedCategory(e.value)} 
					checked={selectedCategory.key === category.key}/>
				<label htmlFor={category.key}>{category.name}</label>
			</div>
		)
	})

	const shop = shopping.map((item:any, index:any)=> (
		<Card key={index} className={StylesCard.card} header={<Image alt="Card" src={item.image}/>}>
			<MyFavorite pokemonId={item.id} favorite_id={item.favorite_id} onChange={()=>getFavorites()}/>
			<h1 className={StylesCard.title}>{item.name} {item.price}$</h1>
		</Card>
	))

	return (
		<>
			<div className={Styles.buttons}>
				{category}
			</div>
			{
				selectedCategory.name == 'MIS COMPRAS' ?
				//<Catalogue data={shopping} onChange={()=>{}}/>
				<div className={StylesCard.products}>{shop}</div>
				: <Catalogue data={favorites} onChange={()=>getFavorites()}/>
			}
		</>
	)
}

export default User