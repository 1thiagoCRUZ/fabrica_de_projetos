import styles from './Sidebar.module.css'

import { FiHome, FiUserPlus } from "react-icons/fi"
import { MdGroup, MdOutlineDashboardCustomize } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { BsBox, BsChatSquare } from "react-icons/bs"
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import logoAvivatec from '../../../img/avivateclogo.svg'
import SidebarLogout from './sidebar_logout/SidebarLogout';


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

                    <ul className={styles.sidebar_list}>
                        <li className={styles.item}>
                            <Link to="/">
                                <span className={styles.btn_item}>
                                    <FiHome />
                                    <span>Home</span>
                                </span>
                            </Link>
                        </li>

                        <li className={styles.item}>
                            {/* Colocar o Link aqui na Nav */}
                            <span className={styles.btn_item}>
                                <MdOutlineDashboardCustomize />
                                <span>Dashboard</span>
                            </span>
                        </li>

                        <li className={styles.item}>
                            <Link to="/consultas">
                                <span className={styles.btn_item}>
                                    <BsBox />
                                    <span>Consultas</span>
                                </span>
                            </Link>
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

                        <li className={styles.item}>
                            {/* Colocar o Link aqui na Nav */}
                            <span className={styles.btn_item}>
                                <BiVideo className={styles.icone_video} />
                                <span>Chamada</span>
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
                    <SidebarLogout />
                </nav>
            </aside>
        </>
    )
}

export default Sidebar