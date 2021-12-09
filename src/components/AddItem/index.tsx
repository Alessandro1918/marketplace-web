import { Link } from 'react-router-dom'

export function AddItem() {

    return(
        <div>
            <button>
                <Link to="/items/add">
                    Adicionar Item
                </Link>
            </button>
        </div>
    )
}