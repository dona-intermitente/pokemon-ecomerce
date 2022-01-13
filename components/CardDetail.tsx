import React from 'react';
import { Image } from 'primereact/image'
import { Card } from 'primereact/card';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'
import { useQuery } from '@apollo/client';
import { POKEMON_TYPE } from '../query/pokemons';
import { Button } from 'primereact/button';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CardDetail({ name, image, price, quantity, id }: any) {
    const router = useRouter()
    const shop = () => {
        router.push({
            pathname: '/pokemon/[name]/[price]',
            query: { price, name, image, quantity, id },
        })
    }
    
    const HeaderCard = () => (
        <Image alt="Card" src={image} />
    )

    const { loading, error, data } = useQuery(POKEMON_TYPE, { variables: { name } })

    if (loading) return <p>...Loading</p>

    const type = data?.pokemon.types[0].type.name

    return (
        <div className={Styles.products}>
            <Card className={Styles.card} header={<HeaderCard />}>
                <MyFavorite />
                <h1 className={Styles.title}>{name} {price}$</h1>
                <p className={Styles.type}>tipo: {type}</p>
                <p className={Styles.quantity}>disponibles: {quantity}</p>
            </Card>
            <Button className={Styles.button} label='COMPRAR' onClick={()=>{shop()}} />
        </div>
    )
}