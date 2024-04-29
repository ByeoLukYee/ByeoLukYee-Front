import React, { useState, useEffect } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/edit/RadioButton.module.css';

function RadioButton({ quantity, labelNames, krStatus, setSelectedOption }) {
    const [option, setOption] = useState(0);
    useEffect(() => {
        if (krStatus === '판매중') {
            setOption(0);
            setSelectedOption(0);
        } else if (krStatus === '예약중') {
            setOption(1);
            setSelectedOption(1);
        } else if (krStatus === '판매완료') {
            setOption(2);
            setSelectedOption(2);
        }
    }, [krStatus, setSelectedOption]);

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