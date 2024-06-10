import React from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ProducerItem.module.css';

function ProducerItem({ onClick, userData }) {
    const handleClick = () => {
        onClick(userData);
    };

    return (
        <>
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
                    <div className={styles['text']}>
                        {/* 마지막 채팅 내용 */}
                        <p>네 그럼 거래 가능합니다.</p>
                        {/* 마지막 채팅 날짜 */}
                        <p>2024-04-12</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProducerItem;