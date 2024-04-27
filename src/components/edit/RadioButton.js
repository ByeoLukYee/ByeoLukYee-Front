import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/edit/RadioButton.module.css';

function RadioButton({ quantity, labelNames, setSelectedOption }) {
    const [option, setOption] = useState(0);

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
                            checked={option === index}
                            onChange={() => {
                                handleRadioChange(index);
                                setOption(index);
                            }} 
                        />
                        <label htmlFor={`radio${index + 1}`}>{labelNames[index]}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RadioButton;