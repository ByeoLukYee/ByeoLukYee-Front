import React, { useState, useRef } from 'react';

import '../../styles/common/Styles.css'
import style from '../../styles/chatting/InputBox.module.css'
import axios from 'axios';

function InputBox({ userId, chatRoomId, handleSendMessage }) {
    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            SendMessage();
            setMessage('');
            inputRef.current.focus();
        }
    };

    async function SendMessage() {
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/messages`, {
                chatRoomId: chatRoomId,
                userId: userId,
                content: message
            });
            if (request.status === 201) {
                console.log("메시지 전송 성공");
                handleSendMessage();
            } else {
                console.log("메시지 전송 실패", request.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

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