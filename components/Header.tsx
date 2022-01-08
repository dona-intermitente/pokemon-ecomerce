import React from 'react';
import UserHeader from './UserHearder'
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import Styles from '../styles/Header.module.css'
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
    const start = <Link href="/" passHref><Image alt="logo" src="/logo-pokemon.png" height="30" width="100"/></Link>;
    const end = (
        <React.Fragment>
            <UserHeader/>
            <Button icon="pi pi-shopping-cart" className={Styles.cart + " p-button-rounded"}/>
        </React.Fragment>
    )
    return (
        <Toolbar className={Styles.header} left={start} right={end} />
    )
}