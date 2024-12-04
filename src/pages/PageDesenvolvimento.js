import { useEffect, useRef } from 'react';
import page_img from '../img/desenvolvimento.svg';
import styles from './PageDesenvolvimento.module.css';

function PageDesenvolvimento() {
    const textRef = useRef(null);

    useEffect(() => {
        const text = "Página em desenvolvimento..."; 
        let index = 0; 

        const typeWriter = () => {
            if (index < text.length) {
                textRef.current.textContent += text[index];
                index++; 
            }
        };

        const interval = setInterval(typeWriter, 150);

        if (index === text.length) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, []); 

    return (
        <main className={styles.main}>
            <div className={styles.image_container}>
                <span><img src={page_img} alt="Página em desenvolvimento" /></span>
                <span className={styles.text_desenvolvimento}>
                    <h1 ref={textRef}></h1>
                </span>
            </div>
        </main>
    );
}

export default PageDesenvolvimento;
