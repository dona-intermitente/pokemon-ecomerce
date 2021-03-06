import React from 'react';
import CardProduct from './CardProduct';
import Styles from '../styles/CardProduct.module.css'
import Header from './Header';

export default function Catalogue({ data, onChange }: any) {
	const cards = data.map((item: any, index: number) =>
		<CardProduct
			key={index}
			image={item.image}
			name={item.name}
			price={item.cost}
			quantity={item.quantity}
			id={item.id}
			favorite_id={item.favorite_id}
			onChange={onChange}
			stock_id={item.stock_id}
			/>
	)

	return (
		<div className={Styles.products}>
			{cards}
		</div>
	)
}