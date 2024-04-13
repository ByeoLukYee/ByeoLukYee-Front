import React from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/MyChat.module.css';

function MyChat({ text }){
    return(
        <div className={styles['chat-box']}>
            <div className={styles['my-chat']}>{text}</div>
        </div>
        
    )
}

export default MyChat;