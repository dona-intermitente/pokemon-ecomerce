import React from 'react';
import Link from 'next/link';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'

export default function CardProduct({ name, image, price, quantity, id, favorite_id, stock_id, onChange }: any) {	
	const HeaderCard = () => (
		<Link href={{
			pathname: '/pokemon/[name]',
			query: { name, image, price, quantity, id, stock_id },
		}}
		>
			<a>
				<Image alt="Card" src="/cuak.png"/>
			</a>
		</Link>
	)

	return (
		<Card className={Styles.card} header={<HeaderCard/>}>
			<MyFavorite pokemonId={id} favorite_id={favorite_id} stock_id={stock_id} onChange={onChange}/>
			<h1 className={Styles.title}>{name} {price}$</h1>
		</Card>
	)
}