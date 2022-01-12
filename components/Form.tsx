import React from 'react';
import { signIn } from 'next-auth/react';

export default function Form({ children, title }: any) {
    const registerUser = async (event: any) => {
        event.preventDefault()
        const { email, password } = event.target

        await signIn('credentials', {
            redirect: false,
            email: email.value,
            password: password.value
        })
    }

    return (
        <form onSubmit={registerUser}>
            <h1>{title}</h1>
            {children}
            <button type="submit">enviar</button>
        </form>
    )
}