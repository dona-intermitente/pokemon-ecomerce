import React from 'react';
import UserHeader from './UserHearder'
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import Styles from '../styles/Header.module.css'


export default function Header() {
    const start = <img alt="logo" src="/logo-pokemon.png" height="30"></img>;
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