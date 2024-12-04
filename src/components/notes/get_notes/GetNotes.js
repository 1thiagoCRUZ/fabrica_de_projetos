import { useEffect } from "react";
import { useState } from "react";
import styles from './GetNotes.module.css';
import loading_svg from '../../../img/loading.svg';
import { IoMdMore } from "react-icons/io";

function GetNotes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userId = localStorage.getItem('user_id');

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api-talklog.onrender.com/v1/note/search/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro na resposta da API: ${response.status}`);
                }

                const data = await response.json();
                setNotes(data.data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, [userId]);

    if (loading) {
        return <div className={styles.loading_container_note}><img src={loading_svg} /></div>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div className={styles.note_container}>
            {notes.length > 0 ? (
                <ul className={styles.ul_note}>
                    {notes.map((note) => (
                        <li key={note.id} className={styles.note_card}>
                            <div
                                className={styles.color_container}
                                style={{ backgroundColor: note.color_note }} 
                            ></div>

                            <div className={styles.card_header}>
                                <span>
                                    <div className={styles.note_title_container}>
                                        <h3 className={styles.note_title}>{note.title_note}</h3>
                                    </div>
                                </span>
                                <span>
                                    <IoMdMore />
                                </span>
                            </div>

                            <p className={styles.note_description}>{note.description_note}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma nota encontrada.</p>
            )}
        </div>
    );
}

export default GetNotes;
