import type { NextPage } from 'next'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import Form from '../components/Form';

const Login: NextPage = () => {
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
        <>
            <Form title="ininiar sección" onsubmit={(e:any)=> {registerUser(e)}}>
                <div>
                    <label htmlFor="email">email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input id="password" name="password" type="password" autoComplete="password" required />
                </div>
            </Form>
            <p>Aun no tienes cuenta</p>
            <Link href="/register">
                <Button label='Registrate'/>
            </Link>
        </>
    )
}

export default Login