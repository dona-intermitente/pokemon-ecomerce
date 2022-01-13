import { useState } from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { shopping, shoppingadd } from '../../../query/shopping';
import Form from '../../../components/Form'
import Styles from '../../../styles/Shopping.module.css'
import { quantityUpdate } from '../../../query/pokemons';

const Shopping: NextPage = () => {
    const router = useRouter()
    const { price, name, image, quantity, id, stock_id } = router.query

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
        const quantityFinal = quantity?.toString() || "0" 

        const myPokemons = await shopping(user_id, pokemon_id, token)
        
        if(!myPokemons.length) {
            const res:any = await shoppingadd(user_id, pokemon_id, token)
            const quantityNew = parseInt(quantityFinal) -1
            await quantityUpdate(stock_id, quantityNew)
            setConfirm(true)
        } else {
            setError(true)
        }
    }

    return (
        <div className={Styles.content}>
            <Button className={Styles.close + " p-button-rounded"} icon="pi pi-times" onClick={() => close()} />
            <Form title="Formulario de compra" onsubmit={(e:any) => {shop(e)}}>
                <div>
                    <label htmlFor="usdt">pago en USDT</label>
                    <p>WALLET: XXXXXXXXXXXXX</p>
                </div>
                <div>
                    <label htmlFor="payment">comprobante de pago</label>
                    <input id="payment" name="payment" type="text" required />
                </div>
                <h1>{name} {price}$</h1>
            </Form>
            <Dialog visible={confirm} footer={renderFooter} onHide={() => {router.push("/user")}}>
                <h1>Compra con éxito</h1>
            </Dialog>
            <Dialog visible={error} footer={renderFooter} onHide={() => {router.push("/user")}}>
                <h1>Ya tienes este producto</h1>
            </Dialog>
        </div>
    )
}

export default Shopping