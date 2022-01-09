/**
 * TODO:
 * - QUITAR EL 15$ DE PRECIO
*/

import React from 'react';
import Image from 'next/image';
import { Card } from 'primereact/card';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'

export default function CardProduct({ name, image }: any) {
	const myLoader = ({ src }: any) => {
		return src
	}

	const HeaderCard = ({ url }: any) => (
		<Image alt="Card" loader={myLoader} src={url} height={500} width={500} layout='responsive' unoptimized priority/>
	)

	return (
		<Card className={Styles.card} header={<HeaderCard url={image}/>}>
			<MyFavorite/>
			<p className={Styles.title}>{name} 15$</p>
		</Card>
	)
}