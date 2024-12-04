import { useState } from "react";
import styles from './ColorSelector.module.css';

function ColorSelector({ colors = [], onColorSelect }) {
    const [selectedColor, setSelectedColor] = useState(null); 

    const handleColorClick = (color) => {
        setSelectedColor(color);  
        if (onColorSelect) {
            onColorSelect(color);  
        }
    };

    return (
        <div className={styles.color_selector}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`${styles.color_circle} ${selectedColor === color ? styles.selected : ""}`} // Aplica a classe de seleção
                    style={{ background: color }}
                    onClick={() => handleColorClick(color)}
                />
            ))}
        </div>
    );
}

export default ColorSelector;
