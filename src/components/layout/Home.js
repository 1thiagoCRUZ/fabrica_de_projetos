import styles from '../layout/Home.module.css'
import AddTask from '../tasks/AddTask'
import Filter from './filter/Filter'

function Home() {
    return (
        <main className={styles.main}>
            {/* O nome será passado como propriedade e pode ser um componente também, talvez um StartMessage */}
            <h2>Organize-se</h2>
            <Filter />

            <div className={styles.filter_container}>
                <AddTask status="Para fazer" />
                <AddTask status="in Progresso" />
                <AddTask status="Concluído" />
                <AddTask status="Revisar" />
            </div>

        </main>
    )
}

export default Home