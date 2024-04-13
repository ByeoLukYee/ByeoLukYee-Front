import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ChattingScreen.module.css';

import ChattingProducer from './ChattingProducer';
import ChattingBox from './ChattingBox';
import InputBox from './InputBox';

function ChattingScreen({ selectedProducer }) {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
        }
    };

    const currentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        const weekDay = ['일', '월', '화', '수', '목', '금', '토'];
        const week = date.getDay();
    
        return `${year}년 ${month}월 ${day}일 (${weekDay[week]})`;
    };
    // const lastMessage = messages.length > 0 ? messages[messages.length - 1] : '';

    return (
        <>
            {selectedProducer && (
                <div className={styles['container']}>
                    <ChattingProducer 
                        name={selectedProducer.name}
                    />
                    <hr />
                    <div className={styles['chatting-box']}>
                        <ChattingBox 
                            date={currentDate()} 
                            messages={[...messages]} 
                            message={messages}
                        />
                        
                    </div>
                    <div className={styles['input-box']}>
                        <InputBox onSendMessage={handleSendMessage} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ChattingScreen;