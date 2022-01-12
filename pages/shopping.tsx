import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from 'primereact/button'
import Form from '../components/Form'

const Shopping: NextPage = () => {
    const router = useRouter()
    const { price, name } = router.query 
    
    const close = () => {
        router.push(`/pokemon/${name}`)
    }

    const shop = () => {
        console.log("compraste")
    }

    return (
        <>
            <Button icon="pi pi-times" onClick={() => close()}/>
            <Form title="Formulario de compra" onsubmit={() => {shop()}}>
                <div>
                    <label htmlFor="metodo">pago en USDT</label>
                    <input id="metodo" name="metodo" type="text" required />
                </div>
                <div>
                    <label htmlFor="wallet">password</label>
                    <input id="wallet" name="wallet" type="text" required />
                </div>
            </Form>
            <h1>{price}</h1>
        </>
    )
}

export default Shopping