import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentItem.module.css';

function CommentItem({ data, onClick, isSelected }) {
    const [isClickable, setIsClickable] = useState(true);

    const handleClick = () => {
        if (isClickable) {
            onClick();
            setIsClickable(false);
        }
    };

    const containerStyle = {
        backgroundColor: data.krStatus === "낙찰" ? '#FFFBED' : '',
    };

    const price = data.price && data.price.toLocaleString() + ' 원';

    return (
        <>
            <div className={`${styles['container']}`} onClick={handleClick} style={containerStyle}>
                <div className={styles['top']}>
                    <p>{data.title}</p>
                    <div className={styles['info']}>
                        <p>{price}</p>
                        <p>{data.location}</p>
                    </div>
                </div>
                <div className={`${styles['hr']} ${isSelected ? styles['clickedHr'] : styles['defalutHr']}`}> <hr /> </div>
                <div className={styles['bottom']}>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;