import React from 'react';
import { Image } from 'primereact/image'
import { Card } from 'primereact/card';
import MyFavorite from './MyFavorite';
import Styles from '../styles/CardProduct.module.css'
import { Button } from 'primereact/button';

export default function CardDetail({ name, image, price, type, quantity }: any) {
    const HeaderCard = ({ url }: any) => (
        <Image alt="Card" src={url} />
    )

    return (
        <>
            <Button icon="pi pi-times"/>
            <Card className={Styles.card} header={<HeaderCard url={image} />}>
                <MyFavorite />
                <p className={Styles.title}>{name} {price}</p>
                <p className={Styles.type}>tipo:{type}</p>
                <p className={Styles.quantity}>disponibles:{quantity}</p>
            </Card>
        </>

    )
}