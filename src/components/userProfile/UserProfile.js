import { useState, useEffect } from "react"
import { useAuth } from "../../routes/AuthContext"
import loadingComponent from '../../img/loading.svg'
import { MdOutlineEdit } from "react-icons/md"
import styles from './UserProfile.module.css'

function UserProfile() {
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
        <div className={styles.content_profile}>
            {loading ? (
                <div className={styles.loading}>
                    <img src={loadingComponent} className={styles.loading} />
                </div>
            ) : userProfile ? (
                <>
                    <div className={styles.top_info}>
                        <span className={styles.imguser_content}>
                            <img src={userProfile.avatar_url} alt="Avatar" />
                        </span>
                        <span className={styles.name_content}>
                            <h4>{userProfile.name}</h4>
                            <p>Programador WEB</p>
                            <p>Segunda a sexta das 08:00 as 18:00</p>
                        </span>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.personal_info}>
                        <div className={styles.personal_info_top}>
                            <span><a>Informações pessoais</a></span>
                            <span className={styles.edit_button}><MdOutlineEdit /> <button>Editar</button></span>
                        </div>

                        <div className={styles.personal_content}>
                            <div className={styles.personal_info_bottom}>
                                <div className={styles.div_margin}>
                                    <span><a>Full Name</a></span>
                                    <span><p>{userProfile.name}</p></span>
                                </div>

                                <div className={styles.div_margin}>
                                    <span><a>Telefone</a></span>
                                    <span><p>{userProfile.phone}</p></span>
                                </div>

                                <div className={styles.div_margin}>
                                    <span><a>E-mail</a></span>
                                    <span><p>{userProfile.email}</p></span>
                                </div>

                                <div>
                                    <span><a>Instituição</a></span>
                                    <span><p>{userProfile.institution}</p></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Usuário não encontrado.</p>
            )}
        </div>
    );
}

export default UserProfile