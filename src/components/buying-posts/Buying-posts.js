import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/Buying-posts.module.css';

import BuyingPostItemList from '../buying-Item/BuyingPostItemList';
import SelectSort from '../main/Select-sort';

function BuyingPosts() {
    return (
        <div style={{left: '15vw', marginTop: '2%'}}>
            <div className={styles['sortTextDiv']}>
                <SelectSort />
            </div>

            <div style={{marginBottom: '10%'}}>
                <BuyingPostItemList />
            </div>
        </div>
    )
}

export default BuyingPosts;