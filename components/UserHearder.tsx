import Link from 'next/link';
import { Button } from 'primereact/button';
import Styles from '../styles/UserHeader.module.css'

export default function UserHeader() {
    return (
			<Link href="/user" passHref>
        <Button icon="pi pi-user" className={Styles.avatar + " p-button-rounded"} />
			</Link>
    )
}