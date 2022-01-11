import React from 'react';
import { Image } from 'primereact/image';
//import Image from 'next/image';
import { Card } from 'primereact/card';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'
import Link from 'next/link';

export default function CardProduct({ name, image, price }: any) {
	const HeaderCard = ({ url, name, price }: any) => (
		<Link href={{
			pathname: '/pokemon/[namePokemon]',
			query: { namePokemon: name, url, price },
		}}
		//as={name}
		>
			<a>
				<Image alt="Card" src={url}/>
			</a>
		</Link>
	)

	return (
		<Card className={Styles.card} header={<HeaderCard url={image} name={name} price={price} />}>
			<p className={Styles.title}>{name} {price}$</p>
		</Card>
	)
}