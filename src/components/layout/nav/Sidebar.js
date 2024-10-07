import styles from './Sidebar.module.css'

import { FiHome, FiUserPlus } from "react-icons/fi"
import { MdGroup, MdOutlineDashboardCustomize } from "react-icons/md";
import { BsBox, BsChatSquare } from "react-icons/bs"
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import logoAvivatec from '../../../img/avivateclogo.svg'


function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <header className={styles.sidebar_header}>
                    <Link to="/">
                        <img src={logoAvivatec} alt="Logo Avivatec" className={styles.logo} />
                    </Link>
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
                                <span>Logout</span>
                            </span>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar