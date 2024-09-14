
import { useState, useEffect } from 'react'

import styles from './Message.module.css'

function Message({ type, msg }) {

    /* Vamos alterar a visibilidade da imagme fazendo com que ela suma
    dependendo de uma condição */
    const [visible, setVisible] = useState(false)

    /* Vamos utilizar o useEffect para fazer tipo um timer de poder estar mudando  
    a exibição dependendo de uma condição. O useEffect sempre tem que estar ligado
    a alguém e nesse caso aqui vai ser a msg, pois é ela que vai determinar se 
    o componente exibe ou não */
    useEffect(() => {

        /* Se a mensagem não existe o setVisible é false */
        if(!msg) {
            setVisible(false)
            return
        }
        /* Se a mensagem existe o setVisible é true */
        setVisible(true)

        /* Espaço para o timer, para fazer com que após 3 segundos a mensagem desapareça */
        const timer = setTimeout(() => {
            /* Após o timer se esgotar a gente define que a visibilidade é false,
            para parar de exibir a mensagem */
            setVisible(false)
        }, 3000) /* 3 segundos */

        // Tem que mandar um return para o useEffect //
        return () => clearTimeout(timer)
    }, [msg])
    /* A lógica do código acima é basicamente: Não tem mensagem? Visibilidade false, ou seja,
    não exibe, faço um return e encerro tudo. 
    Tem mensagem? Visibilidade então vai ser true, começo o timer e após os 3 segundos eu 
    finalizo o timer */


    /* Como podemos fazer se aquela div que estava antes era o elemento pai? 
    Vamos utilizar o fragments que vai ajudar a gente a conseguir realizar
    as condições de if para controlar a visibilidade do componente */
    return (
        <>
        {/* Se estiver vísivel vamos exibir a div que já tinhamos */}
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )}
        </>
    )
}

export default Message
