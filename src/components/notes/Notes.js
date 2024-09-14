import styles from "./notesCss/Notes.module.css"
import ButtonNote from "../notes/ButtonNote"
import NoteCard from "./NoteCard"
import { useState, useEffect } from "react"

function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/notes", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setNotes(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <main className={styles.main}>
            {/* O nome será passado como propriedade e pode ser um componente também, talvez um StartMessage */}
            <h2>Bem vindo, Fulano</h2>
            <div className={styles.div_notes}>
            <span>Suas notas</span>
            <span>
                <ButtonNote text="Adicionar nota" to="/newnote"/>
            </span>
            </div>
            
            {/* Mensagem que vai aparecer caso o usuário não tenha notas sem notas */}
            
                <div className={styles.notes}>
                    {notes.length > 0 && 
                    notes.map((note) => (
                        <NoteCard 
                        id={note.id}
                        name={note.name} 
                        description={note.description}
                        key={note.id}
                        />
                    ))}
                </div>
        </main>
    )
}

export default Notes