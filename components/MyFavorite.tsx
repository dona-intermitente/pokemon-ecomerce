import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { ToggleButton } from 'primereact/togglebutton';
import { favoriteAdd, favoriteRemove } from '../query/favorites';
import Styles from '../styles/Favorites.module.css'

export default function MyFavorite({ pokemonId, favorite_id, onChange }: any) {
    const { data: session } = useSession()
    const [checked, setChecked] = useState(!!favorite_id);

    const change = async (e: any) => {
        setChecked(e.value)
        const user_id = session?.id
        const pokemon_id = e.target.id
        const token = session?.jwt
        
        if (e.value) {
            await favoriteAdd(user_id, pokemon_id, token)
        } else {
            await favoriteRemove(favorite_id, token)
        }
        onChange()
    } 

    return (
        <>
            {session &&
                <>
                    <ToggleButton
                        className={Styles.star}
                        checked={checked}
                        onChange={(e) => change(e)}
                        onIcon="pi pi-star-fill"
                        offIcon="pi pi-star"
                        onLabel="" offLabel=""
                        id={pokemonId}
                    />
                </>

            }
        </>
    )
}