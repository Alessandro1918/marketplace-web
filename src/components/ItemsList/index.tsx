import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { AuthContext } from '../../contexts/auth'


interface Item {
    title: string,
    description: string,
    category_id: string,
    price: number,
    currency_id: string,
    available_quantity: number,
    condition: string,
    listing_type_id: string,
    ml_id: string,
    ml_url: string,
}

export function ItemsList() {

    const { accessToken } = useContext(AuthContext)
    
    const [ items, setItems ] = useState<Item[]>([])

    //At page load, get items
    useEffect(() => {
        api.get<Item[]>('items').then(response => {
            //console.log(response.data)
            setItems(response.data)
        })
    }, [])

    async function confirmDelete(item: Item){
        const action = window.confirm(`Tem certeza que deseja excluir o anúncio desse item?\n${item.title}`)
        if (action) {
            
            //Call the api to delete item from db and ML
            await api.delete(
                `items/${item.ml_id}`,
                {
                    headers: {authorization: `Bearer ${accessToken}`}
                }
            )

            //Refresh page by changing the data from state
            const newArray = items.filter(element => element.ml_id !== item.ml_id)
            setItems(newArray)
        }
    }

    return (
        <div>
            <ul>
                {items.map(item => {
                    return(
                        <li key={item.title}>
                            <p>{`${item.title} - R$${item.price}`}</p>
                            <button><a href={item.ml_url}>Ver anúncio</a></button>
                            <button><Link to={`/items/edit/${item.ml_id}`} state={{item: item}}>Editar</Link></button>
                            <button onClick={() => {confirmDelete(item)}}>Excluir</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}