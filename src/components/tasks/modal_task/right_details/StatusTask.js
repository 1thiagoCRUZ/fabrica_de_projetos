import React from 'react';
import styles from './StatusTask.module.css';

function StatusTask({ status, setStatus }) {
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    // Definir a classe com base no valor selecionado
    const getSelectClass = () => {
        switch (status) {
            case 'in-progress':
                return styles.selectInProgress;
            case 'pendente':
                return styles.selectPendente;
            case 'concluido':
                return styles.selectConcluido;
            case 'revisar':
                return styles.selectRevisar;
            default:
                return '';
        }
    };

    return (
        <div className={styles.selectContainer}>
            <select
                className={`${styles.styledSelect} ${getSelectClass()}`}
                value={status}
                onChange={handleChange}
            >
                <option value="" disabled>
                    Status
                </option>
                <option value="in-progress">In Progress</option>
                <option value="pendente">Pendente</option>
                <option value="concluido">Concluído</option>
                <option value="revisar">Revisar</option>
            </select>
        </div>
    );
}

export default StatusTask;
