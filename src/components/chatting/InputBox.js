import React, { useState, useRef } from 'react';

import '../../styles/common/Styles.css'
import style from '../../styles/chatting/InputBox.module.css'

function InputBox({ onSendMessage }) {
    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSendMessage(message);
            setMessage('');
            inputRef.current.focus();
        }
    };

    return(
        <>
            <input 
                className={style['input-box']} 
                placeholder='메시지 입력'
                value={message}
                onChange={handleMessageChange}
                onKeyPress={handleKeyPress}
                ref={inputRef}
            />
        </>
    )
}   

export default InputBox;