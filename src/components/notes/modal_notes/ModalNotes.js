import { useState } from 'react';
import InputNotes from '../input_notes/InputNotes';
import NotesDetailsInput from '../input_notes/NotesDetails';
import ColorSelector from './color_selector/ColorSelector';
import styles from './ModalNotes.module.css';
import { toast } from 'react-toastify';

function ModalNotes({ show, handleClose }) {
    const [noteTitle, setNoteTitle] = useState('');
    const [details, setDetails] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const handleCreateNote = async () => {
        try {
            const userId = localStorage.getItem('user_id');
            if (!userId) {
                alert('ID do usuário não encontrado');
                return;
            }

            const noteData = {
                title_note: noteTitle,
                description_note: details,
                user_id_note: userId,
                color_note: selectedColor,
            };

            console.log(noteData);

            const response = await fetch('https://api-talklog.onrender.com/v1/note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noteData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar a nota');
            }

            const data = await response.json();
            console.log('Nota criada com sucesso: ', data);

            window.location.reload(); 

            toast.success('Nota criada com sucesso!', {
                style: {
                    backgroundColor: '#252525',
                    color: '#fff',
                }
            });
        } catch (error) {
            console.error('Erro ao criar a nota: ', error);
            alert('Não foi possível criar a nota.');
        }
    };

    if (!show) return null;

    const colors = ['#FFCC00', '#FF3B30', '#34C759', '#30B0C7', '#007AFF', '#AF52DE'];


    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.header_modal}>
                    <div>
                        <h2>Adicionar Nota</h2>
                    </div>

                    <div className={styles.content_close}>
                        <button className={styles.close} onClick={handleClose}>&times;</button>
                    </div>
                </div>

                <div className={styles.input_container}>
                    <div>
                        <InputNotes text_placeholder='Título' noteTitle={noteTitle} setNoteTitle={setNoteTitle} />
                    </div>

                    <div>
                        <NotesDetailsInput details={details} setDetails={setDetails} />
                    </div>
                </div>

                <div className={styles.buttons_note}>
                    <ColorSelector colors={colors} onColorSelect={setSelectedColor} />
                    <button onClick={handleCreateNote} className={styles.create_note}>Criar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalNotes;
