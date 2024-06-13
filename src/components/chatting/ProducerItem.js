import React, { useContext } from 'react';
import { ChattingContext } from './ChattingProvider';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ProducerItem.module.css';

function ProducerItem({ onClick, userData, chatRoomId }) {
    const { saveChatRoomId } = useContext(ChattingContext);
    const handleClick = () => {
        onClick(userData);
        saveChatRoomId(chatRoomId);
    };

    return (
        <div className={styles['container']} onClick={handleClick}>
            <div className={styles['img']}>
                {
                    userData.profileUrl ? (
                        <img src={userData.profileUrl} alt='profileImage'/>
                    ) : (
                        <img src='/images/profileImg.png' alt='profileImage'/>
                    )
                }
            </div>
            <div className={styles['textDiv']}>
                <p>{userData.name}</p>
                {/* <div className={styles['text']}>
                    <p>네 그럼 거래 가능합니다.</p>
                    <p>2024-04-12</p>
                </div> */}
            </div>
        </div>
    )
}

export default ProducerItem;