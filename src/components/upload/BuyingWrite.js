import React from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/upload/BuyingWrite.module.css';
import ImageUpload from './ImageUpload';
import BuyingInput from './BuyingInput';

function BuyingWrite() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['topDiv']}>
                    <ImageUpload />
                </div>

                <div className={styles['inputDiv']}> <BuyingInput /> </div>
            </div>
        </>
    )
}

export default BuyingWrite;