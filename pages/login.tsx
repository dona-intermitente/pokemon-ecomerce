import type { NextPage } from 'next'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import Form from '../components/Form';
import Styles from '../styles/login.module.css'

const Login: NextPage = () => {
    const router = useRouter()
    const registerUser = async (event: any) => {
        event.preventDefault()
        const { email, password } = event.target

        const res:any = await signIn('credentials', {
            redirect: false,
            email: email.value,
            password: password.value
        })

        if (res.ok) {
            router.push("/")
        } else {
            router.push("/register")
            alert("No estas registrado. REGISTRATE")
        }

    }

    return (
        <div className={Styles.content}>
            <Form title="Inicia seccion" onsubmit={(e:any)=> {registerUser(e)}}>
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
                <Button className={Styles.button} label='Registrate'/>
            </Link>
        </div>
    )
}

export default Login