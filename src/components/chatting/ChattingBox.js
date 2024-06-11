import React, { useRef, useEffect } from 'react';

import '../../styles/common/Styles.css'
import styles from '../../styles/chatting/ChattingBox.module.css'

import MyChat from './MyChat';
import YourChat from './YourChat';

function ChattingBox({ messages, userId, handleSendMessage }) {
    // const chatRef = useRef(null);

    // useEffect(() => {
    //     if (chatRef.current) {
    //         chatRef.current.scrollTop = chatRef.current.scrollHeight;
    //     }
    // }, [messages]);

    useEffect(() => {
        handleSendMessage();
    }, []);

    return(
        <div className={styles['chatting-box']}>
            <div className={styles['chatting']}>
                {Array.isArray(messages) && messages &&
                    messages.map((message, index) => (
                        message.userId === userId ?
                            <MyChat key={index} text={message.content} /> :
                            <YourChat key={index} text={message.content} />
                    ))
                }
            </div>
        </div>
    )
}

export default ChattingBox;