import { useState, useEffect } from "react";
import styles from './UserList.module.css'; 
import loadingComponente from '../../img/loading.svg'


const UserList = ({ onUserSelect }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); 

    const currentUserId = localStorage.getItem("user_id");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    `https://api-talklog.onrender.com/v1/users/${currentUserId}`
                );
                const data = await response.json();

                if (data.success === 1) {
                    setUsers(data.data); 
                } else {
                    setError(data.message || "Erro ao buscar usuários.");
                }
            } catch (err) {
                setError("Erro na requisição.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [currentUserId]);

   
    const filteredUsers = users.filter(user =>
        user.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );


    if (loading) return <div className={styles.loading_content}><span>Carregando suas conversas</span> <img src={loadingComponente} alt="loading"/> </div>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.list_user_container}>
            <h2>Mensagens</h2>

            <div className={styles.search_container}>
                <input
                    type="text"
                    className={styles.search_input}
                    placeholder="Pesquisar usuário"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <ul className={styles.user_list}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <>
                            <div className={styles.line_chat}> </div>
                            <li
                                key={user.id}
                                className={styles.user_item}
                                onClick={() => onUserSelect(user)}
                            >
                                <div className={styles.content_chat}>
                                    <div className={styles.user_details}>
                                        <span className={styles.user_name}>{user.name}</span>
                                    </div>
                                    <img src={user.avatar_url} alt={`${user.name}'s avatar`} className={styles.avatar} />

                                </div>
                            </li>
                            <div className={styles.line_chat}> </div>
                        </>
                    ))
                ) : (
                    <p>Nenhum usuário encontrado</p>
                )}
            </ul>
        </div>
    );
};

export default UserList;
