import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

export function LoginML() {

    const { signinUrl } = useContext(AuthContext)

    return(
        <button>
            <a href={signinUrl}>Login no ML</a>
        </button>
    )
}