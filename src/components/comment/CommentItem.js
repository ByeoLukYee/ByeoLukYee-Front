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
                    <div className={styles['info']}>
                        <p>price 원</p>
                        <p>place</p>
                    </div>
                </div>
                <div className={`${styles['hr']} ${clicked ? styles['clickedHr'] : styles['defalutHr']}`}> <hr /> </div>
                <div className={styles['bottom']}>
                    <p>content</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;