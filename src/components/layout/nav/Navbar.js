import Container from "../../Container"
import { FiSearch } from "react-icons/fi";
import styles from './Navbar.module.css'
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img_user from '../../../img/user_image.png'
// import { useEffect, useState } from "react";
// import { useAuth } from "../../../routes/AuthContext";

function Navbar() {
    // const [userProfile, setUserProfile] = useState(null);
    // const [error, setError] = useState(null);

    // const { auth } = useAuth();
    // const token = auth?.token;
    // useEffect(() => {
    //     console.log("Token enviado:", token);
    //     const fetchUserProfile = async () => {
    //         try {

    //             if (!token) {
    //                 setError('Token do usuário não foi encontrado');

    //                 return;
    //             }

    //             const response = await fetch("https://api-authetication-jwt.onrender.com/user_profile", {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    //             }

    //             const data = await response.json();
    //             setUserProfile(data[0]);

    //             if (data[0]?.id) {
    //                 localStorage.setItem('user_id', data[0].id);
    //             }
    //         } catch (err) {
    //             setError(err.message);
    //         }
    //     };

    //     fetchUserProfile();
    // }, [token]);

    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item_name}>
                        <span className={styles.text_welcome}><a>Olá, bem vindo</a></span>
                        <span className={styles.text_welcome}><p className={styles.name_user}>Fulano da Silva</p></span>
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
                            <span><Link to="/profile_user">
                                <span className={styles.imguser_content}>
                                    <img src={img_user} alt="Avatar" />
                                </span>
                            </Link></span>
                        </span>
                    </li>
                </ul>
            </Container>
        </nav>)
}

export default Navbar;