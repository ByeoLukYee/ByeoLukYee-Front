import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/Chatting.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import ProducerList from './ProducerList';
import ChattingScreen from './ChattingScreen';

function Chatting() {
    const userId = Number(useSelector(state => state.userId));
    const [selectedProducer, setSelectedProducer] = useState(null);
    const [isScreenVisible, setIsScreenVisible] = useState(false);

    const handleItemClick = (chatInfo) => {
        setSelectedProducer(chatInfo);
        setIsScreenVisible(!isScreenVisible);
    };

    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['fixedContainer']}>
                    <div className={styles['bodyContainer']}>
                        <div className={styles['chattingList']}>
                            <p>나의 채팅방</p>
                            <ProducerList onItemClick={handleItemClick} userId={userId} />
                        </div>

                        <div className={styles['chattingScreen']}>
                            {isScreenVisible && selectedProducer && (
                                <ChattingScreen selectedProducer={selectedProducer} userId={userId} />
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