import { useState, useEffect } from "react";
import loading_svg from '../../../img/loading.svg'
import styles from './GetTasks.module.css'
import { IoMdMore } from "react-icons/io";

function GetTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userId = localStorage.getItem('user_id');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true); 
                const response = await fetch(`https://api-talklog.onrender.com/v1/task/search/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro na resposta da API: ${response.status}`);
                }

                const data = await response.json();
                setTasks(data.data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [userId]);

    if (loading) {
        return <div className={styles.loading_container_task}><img src={loading_svg} /></div>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div className={styles.tasks_container}>
            {tasks.length > 0 ? (
                <ul className={styles.ul_task}>
                    {tasks.map((task) => (
                        <li key={task.id} className={styles.task_card}>
                            <div className={styles.card_header}>
                                <span
                                    className={`${styles.priority_circle} ${task.prioridade === 'baixa'
                                        ? styles.low_priority
                                        : task.prioridade === 'media'
                                            ? styles.medium_priority
                                            : styles.high_priority
                                        }`}
                                ></span>
                                <span>
                                    <IoMdMore />
                                </span>
                            </div>

                            <div className={styles.task_title_container}>
                                <h3 className={styles.task_title}>{task.title_task}</h3>
                            </div>

                            <div className={styles.line_card}>

                            </div>

                            <p className={styles.task_description}>{task.description_task}</p>
                            <div className={styles.card_footer}>
                                <span className={styles.due_date}>
                                    Data limite: {new Date(task.data_final).toLocaleDateString()}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

            ) : (
                <p>Nenhuma task encontrada.</p>
            )}
        </div>
    );
}

export default GetTasks;
