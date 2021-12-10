import { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { api } from '../../services/api'
import { AuthContext } from '../../contexts/auth'

export function Edit(){

    const { accessToken } = useContext(AuthContext)

    //Get item data from parent component
    //https://ui.dev/react-router-pass-props-to-link/
    const location = useLocation()
    const { item } = location.state

    //Set data to state vars
    //const [ price, set_price ] = useState(10)
    const [ price, set_price ] = useState(item.price)
    
    async function edit(){

        //Call the api to edit item in the db and ML
        await api.put(
            `items/${item.ml_id}`,
            {
                //body:
                price
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
            <div>
                <p>Título do anúncio</p>
                <input name="title" placeholder={item.title} readOnly/>
                <p>Preço (R$)</p>
                <input name="price" defaultValue={price} onChange={(e) => set_price(Number(e.target.value))}/>
            </div>
            
            <button onClick={edit}>
                Editar
            </button>
        </div>
    )
}