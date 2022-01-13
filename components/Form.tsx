import { Button } from 'primereact/button';
import React from 'react';
import Styles from '../styles/Form.module.css'

export default function Form({ children, title, onsubmit }: any) {

    return (
        <form className={Styles.form} onSubmit={onsubmit}>
            <h1>{title}</h1>
            {children}
            <Button  className={Styles.button} label="Enviar" type="submit"/>
        </form>
    )
}