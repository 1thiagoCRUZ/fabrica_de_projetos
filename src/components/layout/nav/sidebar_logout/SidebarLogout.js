import { useState } from 'react';
import { IoMdLogOut } from 'react-icons/io';
import styles from '../Navbar.module.css';
import { useAuth } from '../../../../routes/AuthContext';
import { useNavigate } from 'react-router-dom';

const SidebarLogout = () => {
    const { logout } = useAuth(); // Função de logout do contexto
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api-authetication-jwt.onrender.com/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (data.sucess) {
                logout();
                navigate('/login');
            } else {
                console.error('Erro na API de logout:', data.message);
            }
        } catch (err) {
            console.error('Erro na requisição de logout:', err.message);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <ul className={styles.sidebar_list_down_logout}>
            <li className={styles.item_list_down}>
                <span className={styles.btn_item_list_down}>
                    <button onClick={handleLogout} disabled={isLoading}>
                        {isLoading ? 'Saindo...' : (
                            <>
                                <IoMdLogOut />
                                <span>Logout</span>
                            </>
                        )}
                    </button>
                </span>
            </li>
        </ul>
    );
};

export default SidebarLogout;
