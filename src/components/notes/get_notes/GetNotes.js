import { useEffect } from "react";
import { useState } from "react"

import loading_svg from '../../../img/loading.svg'

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
        return <img src={loading_svg} />;
    }

    if (error) {
        return <p>Erro: {error}</p>
    }

    return (
        <div>
            {notes.length > 0 ? (
                <ul>
                    {notes.map((note) => (
                        <li key={note.id}>
                            <div>COR</div>

                            <div>
                                <h3>{note.title_note}</h3>
                            </div>

                            <p>{note.description_note}</p>
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