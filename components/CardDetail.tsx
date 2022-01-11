import React from 'react';
import { Image } from 'primereact/image'
import { Card } from 'primereact/card';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'
import { useQuery } from '@apollo/client';
import { POKEMON_TYPE } from '../query/pokemons';

export default function CardDetail({ name, image, price, quantity }: any) {
    const HeaderCard = () => (
        <Image alt="Card" src={image} />
    )

    const { loading, error, data } = useQuery(POKEMON_TYPE, { variables: { name } })

    if (loading) return <p>...Loading</p>

    const type = data?.pokemon.types[0].type.name

    return (
        <Card className={Styles.card} header={<HeaderCard />}>
            <MyFavorite />
            <p className={Styles.title}>{name} {price}$</p>
            <p className={Styles.type}>tipo: {type}</p>
            <p className={Styles.quantity}>disponibles: {quantity}</p>
        </Card>
    )
}