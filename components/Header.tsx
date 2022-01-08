import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserHeader from './UserHearder'
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import Styles from '../styles/Header.module.css'

export default function Header() {
    const Logo = React.forwardRef(({ onClick,href }:any, ref ) => (
        <a href={href} onClick={onClick}>
            <Image alt="logo" src="/logo-pokemon.png" height="30" width="100"/>
        </a>
    ))
    
    const start = (
        <Link href="/" passHref>
            <Logo/>
        </Link>
    )

    const end = (
        <React.Fragment>
            <UserHeader/>
            <Button icon="pi pi-shopping-cart" className={Styles.cart + " p-button-rounded"}/>
        </React.Fragment>
    )

    return (
        <Toolbar className={Styles.header} left={start} right={end}/>
    )
}