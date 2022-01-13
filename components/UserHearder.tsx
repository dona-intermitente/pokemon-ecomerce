import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { Button } from 'primereact/button';
import Styles from '../styles/UserHeader.module.css'

export default function UserHeader() {
    const { data: session } = useSession()
    const router = useRouter()

    return (
        <>
            {!session &&
                <Button className={Styles.avatar} label='singIn' onClick={()=>{router.push("/login")}}/>
            }
            {session && <>
                <Button className={Styles.avatar + " p-button-rounded"} icon="pi pi-user" onClick={()=>{router.push("/user")}}/>
                <Button className={Styles.avatar + " p-button-rounded"} icon='pi pi-sign-out' onClick={()=> signOut()}/>
            </>}
        </>
    )
}