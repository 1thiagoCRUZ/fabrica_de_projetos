import styles from "./notesCss/Notes.module.css"
import ButtonNote from "../notes/ButtonNote"

function Notes() {
    return (
        <main className={styles.main}>
            {/* O nome será passado como propriedade e pode ser um componente também, talvez um StartMessage */}
            <h2>Bem vindo Fulano</h2>
            <div className={styles.div_notes}>
            <span>Suas notas</span>
            <span>
                <ButtonNote text="Adicionar nota" to="/addnote"/>
            </span>
            </div>
            
            {/* Mensagem que vai aparecer caso o usuário não tenha notas sem notas */}
            
                <p>Ainda está vazio por aqui....</p>
        </main>
    )
}

export default Notes