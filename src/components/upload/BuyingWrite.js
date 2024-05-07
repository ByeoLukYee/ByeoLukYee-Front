import React from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/upload/BuyingWrite.module.css';
import BuyingInput from './BuyingInput';
import ImageUpload from './ImageUpload';

function BuyingWrite() {
    return (
        <>
            <div className={styles['container']}>
                {/* <div className={styles['topDiv']}>
                    <ImageUpload />
                </div> */}

                <div className={styles['inputDiv']}> <BuyingInput /> </div>
            </div>
        </>
    )
}

export default BuyingWrite;