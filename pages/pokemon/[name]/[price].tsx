import { ApolloProvider } from '@apollo/client'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import Form from '../../../components/Form'
import { shopping, shoppingadd } from '../../../query/shopping';

const Shopping: NextPage = () => {
    const router = useRouter()
    const { price, name, image, quantity, id } = router.query

    const close = () => {
        router.push({
            pathname: `/pokemon/${name}`,
            query: { price, name, image, quantity, id },
        })
    }
    
    const [confirm, setConfirm] = useState(false);
    const [error, setError] = useState(false);

    const renderFooter = () => (
        <Button label="aceptar" onClick={()=>{router.push("/user")}}/>
    )

    const { data: session } = useSession()

    const shop = async (event:any) => {
        event.preventDefault()
        const user_id = session?.id
        const pokemon_id = id
        const token = session?.jwt
        
        const myPokemons = await shopping(user_id, pokemon_id, token)

        if(!myPokemons.length) {
            await shoppingadd(user_id, pokemon_id, token)
            setConfirm(true)
        } else {
            setError(true)
        }
    }

    return (
        <>
            <Button icon="pi pi-times" onClick={() => close()} />
            <Form title="Formulario de compra" onsubmit={(e:any) => {shop(e)}}>
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
            <Dialog visible={confirm} footer={renderFooter} onHide={() => {router.push("/user")}}>
                <h1>Compra con éxito</h1>
            </Dialog>
            <Dialog visible={error} footer={renderFooter} onHide={() => {router.push("/user")}}>
                <h1>Ya tienes este producto</h1>
            </Dialog>
        </>
    )
}

export default Shopping