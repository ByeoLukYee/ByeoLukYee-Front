import React, { useContext, useEffect } from 'react';
import { ChattingContext } from './ChattingProvider';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ChattingScreen.module.css';

import ChattingProducer from './ChattingProducer';
import ChattingBox from './ChattingBox';
import InputBox from './InputBox';

function ChattingScreen({ selectedProducer, userId, messages, handleSendMessage }) {
    const { chatRoomId } = useContext(ChattingContext);

    useEffect(() => {
        handleSendMessage();
    }, [chatRoomId]);

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
                            handleSendMessage={handleSendMessage}
                        />
                        
                    </div>
                    <div className={styles['input-box']}>
                        <InputBox 
                            userId={userId}
                            chatRoomId={chatRoomId}
                            handleSendMessage={handleSendMessage}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ChattingScreen;