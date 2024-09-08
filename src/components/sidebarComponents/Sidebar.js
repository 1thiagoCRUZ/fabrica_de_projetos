import styles from './sidebarCss/Sidebar.module.css'
import logoAvivatec from '../../img/avivateclogo.svg'
import { FiHome, FiUserPlus } from "react-icons/fi"
import { MdGroup, MdOutlineDashboardCustomize } from "react-icons/md";
import { BsBox, BsChatSquare } from "react-icons/bs"
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <header className={styles.sidebar_header}>
                <img src={logoAvivatec} alt="Logo Avivatec" />
                <span>Avivatec</span>
            </header>

            <nav>
                {/* Colocar o Link aqui na Nav */}

                <ul className={styles.sidebar_list}>
                    <li className={styles.item}>
                        <span className={styles.btn_item}>
                            <FiHome />
                            <span>Home</span>
                        </span>
                    </li>

                    <li className={styles.item}>
                        {/* Colocar o Link aqui na Nav */}
                        <span className={styles.btn_item}>
                            <MdOutlineDashboardCustomize />
                            <span>Dashboard</span>
                        </span>
                    </li>

                    <li className={styles.item}>
                        {/* Colocar o Link aqui na Nav */}
                        <span className={styles.btn_item}>
                            <BsBox />
                            <span>Consultas</span>
                        </span>
                    </li>

                    <li className={styles.item}>
                        {/* Colocar o Link aqui na Nav */}
                        <span className={styles.btn_item}>
                            <FiUserPlus />
                            <span>Cadastro</span>
                        </span>
                    </li>

                    <li className={styles.item}>
                        {/* Colocar o Link aqui na Nav */}
                        <span className={styles.btn_item}>
                            <MdGroup />
                            <span>Grupos</span>
                        </span>
                    </li>

                    <li className={styles.item}>
                        {/* Colocar o Link aqui na Nav */}
                        <span className={styles.btn_item}>
                            <BsChatSquare />
                            <span>Chat</span>
                        </span>
                    </li>
                </ul>

                <ul className={styles.sidebar_list_down}>
                    <li className={styles.item_list_down}>
                        <span className={styles.btn_item_list_down}>
                            <IoNotificationsOutline />
                            <span>Notificações</span>
                        </span>
                    </li>

                    <li className={styles.item_list_down}>
                        {/* Colocar o Link aqui na Nav */}
                        <span className={styles.btn_item_list_down}>
                            <IoSettingsOutline />
                            <span>Configurações</span>
                        </span>
                    </li>
                </ul>

                {/* Espaço abaixo para as informações do usuário e o logout */}
                <ul className={styles.sidebar_list_down_logout}>
                    <li className={styles.item_list_down}>
                        <span className={styles.btn_item_list_down}>
                            <IoMdLogOut />
                            <span>Sair</span>
                        </span>
                    </li>
                </ul>

                <div className={styles.info_users}>
                    <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" />
                    <div className={styles.info_users_text}>
                        <a>Thiago</a>
                        <a className={styles.text_email}>nomedousuario@avivatec.com.br</a>
                    </div>

                </div>

            </nav>
        </aside>
    )
}

export default Sidebar