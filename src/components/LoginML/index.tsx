import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

export function LoginML() {

    const { signinUrl } = useContext(AuthContext)

    return(
        <a href={signinUrl}>Login no ML</a>
    )
}