import Container from "../../Container"
import { FiSearch } from "react-icons/fi";
import styles from './Navbar.module.css'
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import loadingComponent from '../../../img/loading.svg'
import { useEffect, useState } from "react";
import { useAuth } from "../../../routes/AuthContext";

function Navbar() {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { auth } = useAuth();
    const token = auth?.token;
    useEffect(() => {
        console.log("Token enviado:", token);
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                if (!token) {
                    setError('Token do usuário não foi encontrado');
                    setLoading(false);
                    return;
                }

                const response = await fetch("https://api-authetication-jwt.onrender.com/user_profile", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                setUserProfile(data[0]);

                if (data[0]?.id) {
                    localStorage.setItem('user_id', data[0].id);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [token]);

    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item_name}>
                    <span className={styles.text_welcome}><a>Olá, bem vindo</a></span>
                    <span className={styles.text_welcome}>
                        <p className={styles.name_user}>
                            {loading ? (
                                <span className={styles.loadingText}></span>
                            ) : userProfile ? (
                                <span><p>{userProfile.name}</p></span>
                            ) : (
                                <p>Fulano da Silva</p>
                            )}
                        </p>
                    </span>

                </li>

                <center>
                    <li className={styles.item}>
                        <div className={styles.search_container}>
                            <span className={styles.icon}>
                                <FiSearch />
                            </span>
                            <input type="text" className={styles.search_input} placeholder="pesquisar" />
                        </div>
                    </li>
                </center>

                <li className={styles.item_not_image}>
                    <span className={styles.span_top_user}>
                        <span className={styles.notification_icon}><IoNotificationsOutline /></span>
                        <span><Link to="/profile_user">
                            {loading ? (
                                <div className={styles.loadingWrapper}>
                                    <div className={styles.loadingCircle}></div>
                                    <img src={loadingComponent} className={styles.loading} />
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/020/911/737/small_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" className={styles.image} />
                                </div>

                            ) : userProfile ? (
                                <>
                                    <span className={styles.imguser_content}>
                                        <img src={userProfile.avatar_url} alt="Avatar" />
                                    </span>
                                </>
                            ) : (
                                <span className={styles.imguser_content_error}><img src="https://static.vecteezy.com/system/resources/thumbnails/020/911/737/small_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" className={styles.image} /></span>

                            )}
                        </Link></span>
                    </span>
                </li>
            </ul>
        </nav>)
}

export default Navbar;