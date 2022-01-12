import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { ToggleButton } from 'primereact/togglebutton';
import { favoriteAdd, favoriteRemove } from '../query/favorites';

export default function MyFavorite({ pokemonId, favorite_id, onChange }: any) {
    const { data: session } = useSession()
    const [checked, setChecked] = useState(!!favorite_id);

    const change = (e: any) => {
        setChecked(e.value)
        const user_id = session?.id
        const pokemon_id = e.target.id
        const token = session?.jwt
        onChange()
        
        if (e.value) {
            favoriteAdd(user_id, pokemon_id, token)
        } else {
            favoriteRemove(favorite_id, token)
        }
    } 

    return (
        <>
            {session &&
                <>
                    <ToggleButton
                        checked={checked}
                        onChange={(e) => change(e)}
                        onIcon="pi pi-star-fill"
                        offIcon="pi pi-star"
                        onLabel="" offLabel=""
                        id={pokemonId}
                    /><h1>{favorite_id}</h1>
                </>

            }
        </>
    )
}