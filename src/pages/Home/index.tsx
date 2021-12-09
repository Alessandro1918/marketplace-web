import { LoginML } from '../../components/LoginML'
import { ItemsList } from '../../components/ItemsList'
import { AddItem } from '../../components/AddItem'

//import styles from './styles.module.scss'

export function Home() {
    return(
        <div>
            <LoginML/>
            <AddItem/>

            <ItemsList/>
        </div>
    )
}