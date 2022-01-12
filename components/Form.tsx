import React from 'react';
import { signIn } from 'next-auth/react';

export default function Form({ children, title, onsubmit }: any) {

    return (
        <form onSubmit={onsubmit}>
            <h1>{title}</h1>
            {children}
            <button type="submit">enviar</button>
        </form>
    )
}