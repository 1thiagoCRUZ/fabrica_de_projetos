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
import { useState } from 'react';
import VideoCallEmbed from '../../call/VideoChamada';


function Sidebar() {
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);

    const handleStartCall = () => {
        setIsVideoCallActive(true); // Ativa a chamada
    };

    const handleEndCall = () => {
        setIsVideoCallActive(false); // Desativa a chamada
    };

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
                            <Link to="/pagina_em_desenvolvimento">
                                <span className={styles.btn_item}>
                                    <MdOutlineDashboardCustomize />
                                    <span>Dashboard</span>
                                </span>
                            </Link>
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
                            <Link to="/pagina_em_desenvolvimento">
                                <span className={styles.btn_item}>
                                    <FiUserPlus />
                                    <span>Cadastro</span>
                                </span>
                            </Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="/pagina_em_desenvolvimento">
                                <span className={styles.btn_item}>
                                    <MdGroup />
                                    <span>Grupos</span>
                                </span>
                            </Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="/chat">
                                <span className={styles.btn_item}>
                                    <BsChatSquare />
                                    <span>Chat</span>
                                </span>
                            </Link>
                        </li>

                        <li className={styles.item}>
                            <Link to="https://video-chamada-r6rl.onrender.com">
                                {/* onClick={handleStartCall} */}
                                <span className={styles.btn_item}>
                                    <BiVideo className={styles.icone_video} />
                                    <span>Chamada</span>
                                </span>
                            </Link>
                        </li>
                    </ul>

                    <ul className={styles.sidebar_list_down}>
                        <li className={styles.item_list_down}>
                            <Link to="/pagina_em_desenvolvimento">
                                <span className={styles.btn_item_list_down}>
                                    <IoNotificationsOutline />
                                    <span>Notificações</span>
                                </span>
                            </Link>
                        </li>

                        <li className={styles.item_list_down}>
                            <Link to="/profile_user">
                                <span className={styles.btn_item_list_down}>
                                    <IoSettingsOutline />
                                    <span>Configurações</span>
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* Espaço abaixo para as informações do usuário e o logout */}
                    <SidebarLogout />
                </nav>
            </aside>

            {isVideoCallActive && <VideoCallEmbed />}
        </>
    )
}

export default Sidebar