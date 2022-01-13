import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'primereact/card';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'

export default function CardProduct({ name, image, price, quantity, id, favorite_id, onChange }: any) {
	const myLoader = () => {
		return "/cuak.png"
	}
	
	const HeaderCard = () => (
		<Link href={{
			pathname: '/pokemon/[name]',
			query: { name, image, price, quantity, id },
		}}
		>
			<a>
				<Image alt="Card" src={image} loader={myLoader} height={500} width={500} priority/>
			</a>
		</Link>
	)

	return (
		<Card className={Styles.card} header={<HeaderCard/>}>
			<MyFavorite pokemonId={id} favorite_id={favorite_id} onChange={onChange}/>
			<h1 className={Styles.title}>{name} {price}$</h1>
		</Card>
	)
}