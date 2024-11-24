import { FiSearch } from 'react-icons/fi'
import styles from './Consultas.module.css'

function Consultas() {
    return (
        <main className={styles.main}>
            <span className={styles.section}>
                <div className={styles.bolinha_1}>
                    
                </div>
                <div className={styles.consultas_container}>
                    <div className={styles.h1_consultas_container}>
                        <h1>Tire suas dúvidas sobre a<br /> <span className={styles.highlight}>Avivatec</span></h1>
                    </div>
                    <div className={styles.search_container_consulta}>
                        <input type="text" placeholder="Pesquise aqui..." className={styles.search_input_consultas} />
                        <span className={styles.icon}>
                            <FiSearch />
                        </span>
                    </div>
                </div>

                <div className={styles.bolinha_2}>
                   
                </div>
            </span>
        </main>
    )
}

export default Consultas