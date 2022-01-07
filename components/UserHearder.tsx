import { Button } from 'primereact/button';
import Styles from '../styles/UserHeader.module.css'

export default function UserHeader() {
    return (
        <Button icon="pi pi-user" className={Styles.avatar + " p-button-rounded"} />
    )
}