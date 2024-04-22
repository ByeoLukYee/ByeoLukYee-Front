import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentItem.module.css';

function CommentItem() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <div className={`${styles['container']} ${clicked ? styles['clickedContainer'] : ''}`} onClick={handleClick}>
                <div className={styles['top']}>
                    <p>title</p>
                    {/* <p>아이폰 7 로즈골드 배터리 효율 70% 팝니다</p> */}
                    <div className={styles['info']}>
                        <p>price 원 </p>
                        {/* <p>70,000 원 </p> */}
                        <p>place</p>
                        {/* <p>신림역</p> */}
                    </div>
                </div>
                <div className={`${styles['hr']} ${clicked ? styles['clickedHr'] : styles['defalutHr']}`}> <hr /> </div>
                <div className={styles['bottom']}>
                    <p>content</p>
                    {/* <p>쿨거래 네고 가능합니다. 채팅 주세요</p> */}
                </div>
            </div>
        </>
    )
}

export default CommentItem;