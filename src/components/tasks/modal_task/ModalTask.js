import { useState } from 'react';
import styles from './ModalTask.module.css'
import { MdOutlineDashboard } from "react-icons/md";
import TaskDetailsInput from './TaskDetails';
import ModalBottomDetails from './modal_bottom_details/ModalBottomDetails';
import StatusTask from './right_details/StatusTask';
import PriorityTask from './right_details/PriorityTask';
import DateTask from './right_details/DateTask';
import { toast } from 'react-toastify';

function ModalTask({ show, handleClose }) {
    const [taskName, setTaskName] = useState(''); 
    const [details, setDetails] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [finalDate, setFinalDate] = useState(null);

    const handleCreateTask = async () => {
        try {
        
            const userId = localStorage.getItem('user_id'); 
            if (!userId) {
                alert('ID do usuário não encontrado.');
                return;
            }
        
            const taskData = {
                user_id_task: userId,
                title_task: taskName,
                description_task: details,
                prioridade: priority,
                data_final: finalDate ? finalDate.toISOString() : null,  
                status_task: status,
            };
            
        
            console.log(taskData);

            const response = await fetch('https://api-talklog.onrender.com/v1/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar a task');
            }

            const data = await response.json();
            console.log('Task criada com sucesso:', data);
            handleClose();
            toast.success('Task criada com sucesso!', {
                style: {
                    backgroundColor: '#252525',
                    color: '#fff',
                }
            });
            
        } catch (error) {
            console.error('Erro ao criar a task:', error);
            alert('Não foi possível criar a task.');
        }
    };

    if (!show) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.content_close}>
                    <button className={styles.close} onClick={handleClose}>&times;</button>
                </div>
                <div className={styles.left_content}>
                    <p className={styles.color_p_modal}>Projetos / Nova task</p>

                    <h2>Nova Task</h2>
                    <TaskDetailsInput
                        details={details}
                        setDetails={setDetails}
                    />
                    <ModalBottomDetails
                        taskName={taskName}
                        setTaskName={setTaskName}
                    />
                </div>

                <div className={styles.right_content}>
                    <div className={styles.content_right_text}>
                        <span>
                            <p>Atributos</p>
                        </span>
                        <span className={styles.icon_right_content}>
                            <MdOutlineDashboard />
                        </span>
                    </div>

                    <div className={styles.atributes_task}>
                        <div className={styles.task_details}>
                            <span><p>Status:</p></span>
                            <StatusTask
                                status={status}
                                setStatus={setStatus}
                            />
                        </div>

                        <div className={styles.task_details}>
                            <span><p>Prioridade:</p></span>
                            <PriorityTask
                                priority={priority}
                                setPriority={setPriority}
                            />
                        </div>

                        <div className={styles.task_details_date}>
                            <span><p>Data Final:</p></span>
                            <DateTask
                                finalDate={finalDate}
                                setFinalDate={setFinalDate}
                            />
                        </div>
                    </div>

                    <div className={styles.buttons_task}>
                        <button onClick={handleClose} className={styles.cancel_task}>Cancelar</button>
                        <button onClick={handleCreateTask} className={styles.create_task}>Criar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalTask;
