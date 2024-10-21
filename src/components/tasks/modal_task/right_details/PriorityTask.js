import React, { useState } from 'react';
import styles from './PriorityTask.module.css';

function PriorityTask() {
    const [status, setStatus] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const getSelectClass = () => {
        switch (status) {
            case 'baixa':
                return styles.selectBaixa;
            case 'media':
                return styles.selectMedia;
            case 'alta':
                return styles.selectAlta;
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
                    Prioridade
                </option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>
        </div>
    );
};

export default PriorityTask;
