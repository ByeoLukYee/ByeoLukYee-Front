import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/edit/RadioButton.module.css';

function RadioButton({ quantity, labelNames }) {
    const [selectedOption, setSelectedOption] = useState(0);

    const handleRadioChange = (index) => {
        setSelectedOption(index);
    };

    return (
        <>
            <div className={styles['radioButton']}>
                {Array.from({ length: quantity }, (_, index) => (
                    <div key={index} className={styles['button']}>
                        <input 
                            type='radio' 
                            id={`radio${index + 1}`} 
                            name='radioGroup' 
                            checked={selectedOption === index}
                            onChange={() => handleRadioChange(index)} 
                        />
                        <label htmlFor={`radio${index + 1}`}>{labelNames[index]}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RadioButton;