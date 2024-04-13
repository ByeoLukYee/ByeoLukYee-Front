import React, { useRef, useEffect } from 'react';

import '../../styles/common/Styles.css'
import styles from '../../styles/chatting/ChattingBox.module.css'

import MyChat from './MyChat';
import YourChat from './YourChat';

function ChattingBox({ date, messages }) {
    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    if (messages.length === 0) {
        return null;
    }

    return(
        <div className={styles['chatting-box']}>
            {date && (
                <div className={styles['date-box']}>{date}</div>
            )}
            <div className={styles['chatting']} ref={chatRef}>
                {/* <YourChat text='안녕하세요! 저 아이폰 관심있어서 연락 드렸어요'/>
                <MyChat text='네 안녕하세요! 궁금한 거 있으신가요?'/>
                <YourChat text='혹시 배터리 효율이 몇 퍼센트인가요?'/>
                <MyChat text='지금 확인하고 연락드릴게요'/>
                <MyChat text='80%입니다!'/>
                <MyChat text='다른 궁금하신 점은 없으시면 약속 잡을까요?'/>
                <YourChat text='네네 없어요'/>
                <YourChat text='미림정원에서 12시 50분에 만나는거 어떤가요?'/> */}
                {messages.map((message, index) => (
                    <MyChat key={index} text={message} />
                ))}
            </div>
        </div>
    )
}

export default ChattingBox;