import React, { useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';

export default function MyFavorite() {
    const [checked1, setChecked1] = useState(false);
	return (
        <ToggleButton 
            checked={checked1}
            onChange={(e) => setChecked1(e.value)}
            onIcon="pi pi-star-fill"
            offIcon="pi pi-star"
            onLabel="" offLabel=""
        />
	)
}