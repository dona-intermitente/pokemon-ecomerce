import type { NextPage } from 'next'
import Link from 'next/link';
import { Button } from 'primereact/button';
import Form from '../components/Form';

const Login: NextPage = () => {
        
    return (
        <>
            <Form title="ininiar sección">
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