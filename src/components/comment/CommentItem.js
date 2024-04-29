import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentItem.module.css';

function CommentItem({ data }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if(data.krStatus !== "낙찰") {
            setClicked(true);
        }
    };

    const containerStyle = {
        backgroundColor: data.krStatus === "낙찰" ? '#FFFBED' : '',
    };

    const price = data.price && data.price.toLocaleString() + ' 원';

    return (
        <>
            <div className={`${styles['container']} ${clicked ? styles['clickedContainer'] : ''}`} onClick={handleClick} style={containerStyle}>
                <div className={styles['top']}>
                    <p>{data.title}</p>
                    <div className={styles['info']}>
                        <p>{price}</p>
                        <p>{data.location}</p>
                    </div>
                </div>
                <div className={`${styles['hr']} ${clicked ? styles['clickedHr'] : styles['defalutHr']}`}> <hr /> </div>
                <div className={styles['bottom']}>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;