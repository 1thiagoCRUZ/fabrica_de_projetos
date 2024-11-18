import React from 'react';
import styles from './PriorityTask.module.css';

function PriorityTask( {priority, setPriority} ) {
    const handleChange = (event) => {
        setPriority(event.target.value); 
    };

    const getSelectClass = () => {
        switch (priority) {
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
                value={priority} 
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
