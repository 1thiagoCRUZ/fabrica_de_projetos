import styles from './Container.module.css'

function Container(props) {
    /* Vamos criar o Container para poder alterar classes que 
    vão fazer com que eu possa mudar a disposição dos meus itens
    dentro desse container */
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
    /* Quando vamos encapsular algo dentro de um componente
    pelas tags tem que colocar o props.children para dizer
    aonde vão esses caras extras */
}

export default Container