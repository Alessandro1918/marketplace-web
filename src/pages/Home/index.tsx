import { useContext } from 'react'
import { LoginML } from '../../components/LoginML'
import { ItemsList } from '../../components/ItemsList'
import { AddItem } from '../../components/AddItem'
import { AuthContext } from '../../contexts/auth'

//import styles from './styles.module.scss'

export function Home() {

    const { accessToken } = useContext(AuthContext)

    return(
        <div>
            {!accessToken && <LoginML/>}
            
            <AddItem/>

            <ItemsList/>
        </div>
    )
}