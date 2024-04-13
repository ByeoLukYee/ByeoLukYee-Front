import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ChattingScreen.module.css';

import ChattingProducer from './ChattingProducer';
import ChattingBox from './ChattingBox';
import MyChat from './MyChat';
import InputBox from './InputBox';

function ChattingScreen() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
        }
    };

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    let weekDay = ['일', '월', '화', '수', '목', '금', '토'];
    const week = date.getDay();

    const currentDate = `${year}년 ${month}월 ${day}일 (${weekDay[week]})`;

    return (
        <>
            <div className={styles['container']}>
                <ChattingProducer />
                <hr />
                <div className={styles['chatting-box']}>
                    <ChattingBox date={currentDate} messages={[...messages]}/>
                    
                </div>
                <div className={styles['input-box']}>
                    <InputBox onSendMessage={handleSendMessage} />
                </div>
            </div>
        </>
    )
}

export default ChattingScreen;