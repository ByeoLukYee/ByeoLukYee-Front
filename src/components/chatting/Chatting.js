import React, { useContext, useState } from 'react';
import { ChattingContext } from './ChattingProvider';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/Chatting.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import ProducerList from './ProducerList';
import ChattingScreen from './ChattingScreen';

function Chatting() {
    const userId = Number(useSelector(state => state.userId));
    const [selectedProducer, setSelectedProducer] = useState(null);
    const { saveLastMessage, chatRoomId } = useContext(ChattingContext);
    const [messages, setMessages] = useState([]);

    const handleItemClick = (chatInfo) => {
        setSelectedProducer(chatInfo);
        handleSendMessage();
    };

    const handleSendMessage = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/chatrooms/${chatRoomId}/messages`);
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

    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['fixedContainer']}>
                    <div className={styles['bodyContainer']}>
                        <div className={styles['chattingList']}>
                            <p>나의 채팅방</p>
                            <ProducerList 
                                userId={userId}
                                onItemClick={handleItemClick}
                            />
                        </div>

                        <div className={styles['chattingScreen']}>
                            {selectedProducer && (
                                <ChattingScreen 
                                    userId={userId}
                                    messages={messages}
                                    selectedProducer={selectedProducer}
                                    handleSendMessage={handleSendMessage}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Chatting;