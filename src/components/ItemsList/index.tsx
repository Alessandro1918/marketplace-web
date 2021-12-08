import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface Item {
    title: string,
}

export function ItemsList() {
    
    const [ items, setItems ] = useState<Item[]>([])

    useEffect(() => {
        api.get<Item[]>('items').then(response => {
            //console.log(response.data)
            setItems(response.data)
        })
    }, [])

    return (
        <div>
            <ul>
                {items.map(item => {
                    return(
                        <li key={item.title}>
                            <p>{item.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}