import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ProducerItem.module.css';
import { useState } from 'react';

function ProducerItem() {
    const [clicked, setClicked] = useState('');

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <div className={clicked ? `${styles['clickedContainer']}` : styles['container']} onClick={handleClick}>
                <div className={styles['img']}> <img src='/images/exampleImg.png' alt='example'/> </div>
                <div className={styles['textDiv']}>
                    <p>최보람</p>
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