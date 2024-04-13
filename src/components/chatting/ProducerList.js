import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ProducerList.module.css';

import ProducerItem from './ProducerItem';

function ProducerList({ onItemClick }) {
    const [clicked, setClicked] = useState('');

    const handleClick = () => {
        setClicked(!clicked);
        onItemClick({ name: '최보람', lastMessage: '네 그럼 거래 가능합니다.', lastMessageDate: '2024-04-12' });
    }


    return (
        <>
            <div className={styles['topContainer']}>
                {/* <div className={clicked ? `${styles['clickedContainer']}` : styles['container']}> <ProducerItem onClick={handleClick}/> </div> */}
                <div className={clicked ? `${styles['clickedContainer']}` : styles['container']}> <ProducerItem onClick={handleClick}/> </div>
            </div>
        </>
    )
}

export default ProducerList;