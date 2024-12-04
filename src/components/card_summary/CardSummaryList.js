import React, { useState, useEffect } from 'react';
import { IoMdMore } from 'react-icons/io';
import styles from './CardSummaryList.module.css';

const CardSummaryList = () => {
    const [summaries, setSummaries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = window.location.protocol === 'https:' ?
        'https://ec2-3-144-93-193.us-east-2.compute.amazonaws.com:8080/get_summaries' :
        'http://ec2-3-144-93-193.us-east-2.compute.amazonaws.com:8080/get_summaries';
        const fetchSummaries = async () => {
            try {
                setLoading(true);
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro na resposta da API: ${response.status}`);
                }

                const data = await response.json();
                setSummaries(data.summaries);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSummaries();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div className={styles.sumary_container}>
            {summaries.length > 0 ? (
                <ul className={styles.ul_sumary}>
                    {summaries.map((summary, index) => (
                        <li key={index} className={styles.sumary_card}>
                            <div className={styles.card_header}>
                                <span>
                                    <div className={styles.sumary_title_container}>
                                        <h3 className={styles.sumary_title}>{summary.title}</h3>
                                    </div>
                                </span>
                                <span>
                                    <IoMdMore />
                                </span>
                            </div>

                            <p className={`${styles.sumary_description} ${summary.expanded ? styles.expanded : ''}`}>
                                {summary.expanded ? summary.summary : `${summary.summary.slice(0, 100)}...`} {/* Exibe resumo até 100 caracteres */}
                            </p>
                            <button
                                className={styles.toggle_button}
                                onClick={() => {
                                    const newSummaries = [...summaries];
                                    newSummaries[index].expanded = !newSummaries[index].expanded;
                                    setSummaries(newSummaries);
                                }}
                            >
                                {summary.expanded ? 'Mostrar Menos' : 'Mostrar Mais'}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma nota encontrada.</p>
            )}
        </div>
    );
};

export default CardSummaryList;
