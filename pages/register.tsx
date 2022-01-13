import axios from 'axios';
import type { NextPage } from 'next'
import Link from 'next/link';
import { Button } from 'primereact/button';
import Form from '../components/Form';
import Styles from '../styles/Register.module.css'

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
        <div className={Styles.content}>
            <Form title="Registrate" onsubmit={(e:any) => {registerUser(e)}}>
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
            </Form>
            <p>Ya tienes cuenta</p>
            <Link href="/login">
                <Button className={Styles.button} label='Ingresa' />
            </Link>
        </div>
    )
}

export default Register