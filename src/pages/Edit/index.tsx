import { useState, useContext } from 'react'

import { api } from '../../services/api'
import { AuthContext } from '../../contexts/auth'

export function Edit(){

    const { accessToken } = useContext(AuthContext)

    const url = window.location.href    //baseUrl/items/edit/MLB9876
    const ml_id = url.split('/edit/')[1]

    const [ price/*, set_price*/ ] = useState(12)
    
    async function edit(){

        //Call the api to edit item in the db and ML
        await api.put(
            `items/${ml_id}`,
            {
                //body:
                ml_id, price
            },
            {
                headers: {authorization: `Bearer ${accessToken}`}
            }
        )

        //Go back to Home
        window.history.back()
    }

    return(
        <div>
            <button onClick={edit}>
                Editar
            </button>
        </div>
    )
}