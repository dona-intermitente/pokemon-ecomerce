import React from 'react';
import Link from 'next/link';
import { Image } from 'primereact/image';
import { Toolbar } from 'primereact/toolbar';
import UserHeader from './UserHearder'
import Styles from '../styles/Header.module.css'

export default function Header() {
    const start = (
        <Link href="/">
            <a>
                <Image alt="logo" src="/logo-pokemon.png" height="40"/>
            </a>
        </Link>
    )

    const end = <UserHeader/>

    return (
        <Toolbar className={Styles.header} left={start} right={end}/>
    )
}