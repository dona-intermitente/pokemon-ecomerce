import axios from 'axios';
import type { NextPage } from 'next'
import Link from 'next/link';
import { Button } from 'primereact/button';

const Register: NextPage = () => {
    const registerUser = async (event: any) => {
        event.preventDefault()
        const { username, email, password } = event.target
        const formData = {
            username: username.value,
            email: email.value,
            password: password.value,
        }
        //TODO: MOSTRAR MENSAGE DE ERROR EN PANTALLA
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_USER_API}/auth/local/register`, formData)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="username">Name</label>
                    <input id="username" name="username" type="text" autoComplete="username" required />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input id="password" name="password" type="password" autoComplete="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Ya tienes cuenta</p>
            <Link href="/login">
                <Button label='Ingresa' />
            </Link>
        </>
    )
}

export default Register