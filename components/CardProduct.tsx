import React from 'react';
import Link from 'next/link';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'

export default function CardProduct({ name, image, price, quantity }: any) {
	const HeaderCard = () => (
		<Link href={{
			pathname: '/pokemon/[name]',
			query: { name, image, price, quantity },
		}}
		>
			<a>
				<Image alt="Card" src={image}/>
			</a>
		</Link>
	)

	return (
		<Card className={Styles.card} header={<HeaderCard/>}>
            <MyFavorite />
			<p className={Styles.title}>{name} {price}$</p>
		</Card>
	)
}