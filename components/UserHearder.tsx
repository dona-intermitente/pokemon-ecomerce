import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import Styles from '../styles/UserHeader.module.css'

export default function UserHeader() {
    const { data: session } = useSession()
    
    return (
        <>
            {!session &&
                <Link href="/login" passHref>
                    <Button className={Styles.avatar} label='singIn'/>
                </Link>
            }
            {session && 
                <Link href="/user" passHref>
                    <Button icon="pi pi-user" className={Styles.avatar + " p-button-rounded"} />
                </Link>
            }
        </>
    )
}