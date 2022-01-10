import type { NextPage } from 'next'
import { signIn } from 'next-auth/react';

const Login: NextPage = () => {
    const registerUser = async (event: any) => {
        event.preventDefault()
        console.log(event);
        
        const { email, password} = event.target

        const status = await signIn('credentials', {
            redirect: false,
            email: email.value,
            password: password.value
        })
        console.log(status);
    }

    return (
        <form onSubmit={registerUser}>
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
    )
}

export default Login