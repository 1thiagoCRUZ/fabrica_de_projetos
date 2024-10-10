import { useState } from 'react';
import styles from './ColorPriority.module.css'

function ColorPriority () {
    const [selectedColor, setSelectedColor] = useState(null);

    const colors = ['#E93838', '#2B85D8', '#59D645', '#E9C238'];

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <div className={styles.color_picker}>
                {colors.map(color => (
                    <div
                        key={color}
                        className={`${styles.color_option} ${selectedColor === color ? styles.selected : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ColorPriority;
