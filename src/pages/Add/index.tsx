import { useState, useContext } from 'react'

import { api } from '../../services/api'
import { AuthContext } from '../../contexts/auth'

export function Add(){

    const { accessToken } = useContext(AuthContext)

    const [ title/*, set_title*/ ] = useState('Cenoura')
    const [ description/*, set_description*/ ] = useState('Descrição do item: \nCenoura')
    const [ category_id/*, set_category_id*/ ] = useState('MLB3530')
    const [ price/*, set_price*/ ] = useState(10)
    const [ currency_id/*, set_currency_id*/ ] = useState('BRL')
    const [ available_quantity/*, set_available_quantity*/ ] = useState(1)
    const [ condition/*, set_condition*/ ] = useState('not_specified')
    const [ listing_type_id/*, set_listing_type_id*/ ] = useState('free')

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
            <button onClick={add}>
                Adicionar
            </button>
        </div>
    )
}