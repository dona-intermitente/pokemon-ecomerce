import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import { Image } from 'primereact/image';
import { SelectButton } from 'primereact/selectbutton';
import { Card } from 'primereact/card';
import { cardPokemonFavorite } from '../query/pokemons';
import MyFavorite from '../components/MyFavorite';
import Styles from '../styles/CardProduct.module.css'

const User: NextPage = () => {
	const [value, setValue] = useState('MIS COMPRAS');
	const options = ['MIS COMPRAS', 'MIS FAVORITOS'];

	const { data: session } = useSession()
	const [favorite, setFavorite] = useState([])

	const user_id = session?.id
	const token = session?.jwt

	const getPokemon = async (user_id:any, token:any) => {
		const pokemon = await cardPokemonFavorite(user_id, token)
		setFavorite(pokemon)
	}

	useEffect(() => {
		getPokemon(user_id, token)
	}, [favorite])

	const cards = favorite.map((item: any, index: number) =>
		<Card key={index} className={Styles.card} header={<Image alt="Card" src={item.image} />}>
			<MyFavorite pokemonId={item.id} favorite_id={item.favorite_id} onChange={() => {getPokemon(user_id, token)} }/>
			<p className={Styles.title}>{item.name} {item.price}$</p>
		</Card>
	)

	return (
		<>
			<SelectButton value={value} options={options} onChange={(e) => setValue(e.value)} />
			{
				value == 'MIS COMPRAS' ? <div>compras</div> : <div>{cards}</div>
			}
		</>
	)
}

export default User