import Container from "../../Container"
import { FiSearch } from "react-icons/fi";
import styles from './Navbar.module.css'
import { IoNotificationsOutline } from "react-icons/io5";
import user_image from '../../../img/user_image.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <span className={styles.text_welcome}><a>Olá, bem vindo</a></span>
                        <p className={styles.name_user}>Fulano da Silva</p>
                    </li>

                    <li className={styles.item}>
                        <div className={styles.search_container}>
                            <span className={styles.icon}>
                                <FiSearch />
                            </span>
                            <input type="text" className={styles.search_input} placeholder="pesquisar" />
                        </div>
                    </li>

                    <li className={styles.item_not_image}>
                        <span className={styles.span_top_user}>
                            <span className={styles.notification_icon}><IoNotificationsOutline /></span>
                            <span><img src={user_image} /></span>
                        </span>
                    </li>
                </ul>
            </Container>
        </nav>)
}

export default Navbar;