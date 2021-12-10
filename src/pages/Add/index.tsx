import { useState, useContext } from 'react'

import { api } from '../../services/api'
import { AuthContext } from '../../contexts/auth'

export function Add(){

    const { accessToken } = useContext(AuthContext)

    const [ title, set_title ] = useState('')
    const [ description, set_description ] = useState('')
    const category_id = 'MLB3530'
    const [ price, set_price ] = useState(0)
    const currency_id = 'BRL'
    const available_quantity = 1
    const condition = 'not_specified'
    const listing_type_id = 'free'

    async function add(){
        
        //Call the api to add item to db and ML
        await api.post(
            'items',
            {
                //body:
                title, description, category_id, price, currency_id, available_quantity, condition, listing_type_id
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
                <input name="title" placeholder="Ex: Banana" onChange={(e) => set_title(e.target.value)}/>
                <p>Descrição</p>
                <input name="description" placeholder="Ex: Banana prata, direto do Produtor" onChange={(e) => set_description(e.target.value)}/>
                <p>Preço (R$)</p>
                <input name="price" placeholder="Ex: 10" onChange={(e) => set_price(Number(e.target.value))}/>
            </div>

            <button onClick={add}>
                Adicionar
            </button>
        </div>
    )
}