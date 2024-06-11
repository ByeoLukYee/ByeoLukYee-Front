import React, { useContext, useEffect, useState } from 'react';
import { ChattingContext } from './ChattingProvider';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ChattingScreen.module.css';

import ChattingProducer from './ChattingProducer';
import ChattingBox from './ChattingBox';
import InputBox from './InputBox';

function ChattingScreen({ selectedProducer, userId }) {
    const { saveLastMessage } = useContext(ChattingContext);
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/chatrooms/${selectedProducer.chatRoomId}/messages`);
            if (response.status === 200) {
                console.log("메시지 조회 성공");
                setMessages(response.data);

                // 마지막으로 보낸 메시지 조회 후 Provider에 저장
                if (response.data.length > 0) {
                    const lastMessage = response.data[response.data.length - 1].content;
                    saveLastMessage(lastMessage);
                }
            } else {
                console.log("메시지 조회 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    };

    useEffect(() => {
        handleSendMessage();
    }, []);

    return (
        <>
            {selectedProducer && (
                <div className={styles['container']}>
                    <ChattingProducer 
                        producer={selectedProducer}
                    />
                    <hr />
                    <div className={styles['chatting-box']}>
                        <ChattingBox
                            messages={messages}
                            userId={userId}
                        />
                        
                    </div>
                    <div className={styles['input-box']}>
                        <InputBox 
                            userId={userId}
                            chatRoomId={selectedProducer.chatRoomId}
                            handleSendMessage={handleSendMessage}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ChattingScreen;