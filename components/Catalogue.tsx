import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import { pokemons } from '../query/pokemons';
import Styles from '../styles/CardProduct.module.css'    


export default function Catalogue({data}:any) {
	const cards = data.map((item:any,index:number) => 
		<CardProduct key={index} image={item.image} name={item.name}/>
	)
		
	return (
			<div className={Styles.products}>
					{cards}
			</div>
	)
}