import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useQuery } from '@apollo/client';
import { Image } from 'primereact/image'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { POKEMON_TYPE } from '../query/pokemons';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardDetail.module.css'

export default function CardDetail({ name, image, price, quantity, id, stock_id }: any) {
	const { data: session } = useSession()
    const router = useRouter()
    const shop = () => {
        router.push({
            pathname: '/pokemon/[name]/[price]',
            query: { price, name, image, quantity, id, stock_id },
        })
    }
    
    const HeaderCard = () => (
        <Image alt="Card" src={image} />
    )

    const { loading, error, data } = useQuery(POKEMON_TYPE, { variables: { name } })

    if (loading) return <p>...Loading</p>

    const type = data?.pokemon.types[0].type.name

    return (
        <div className={Styles.content}>
            <Card className={Styles.card} header={<HeaderCard />}>
                <MyFavorite />
                <h1 className={Styles.title}>{name} {price}$</h1>
                <p className={Styles.type}>tipo: {type}</p>
                <p className={Styles.quantity}>disponibles: {quantity}</p>
            </Card>
            {
                session && 
                <Button className={Styles.button} label='COMPRAR' onClick={()=>{shop()}} />
            }
            {
                !session &&
                <Button className={Styles.button} label='COMPRAR' onClick={()=>router.push("/login")} />
            }
        </div>
    )
}