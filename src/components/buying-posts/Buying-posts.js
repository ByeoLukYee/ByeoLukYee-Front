import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import buyingStyle from '../../styles/buying-Item/Buying-posts.module.css';

import BuyingPostItemList from '../buying-Item/BuyingPostItemList';
import SelectSort from '../main/Select-sort';

function BuyingPosts() {
    return (
        <div style={{left: '15vw', marginTop: '2%'}}>
            <div className={buyingStyle['sortTextDiv']}>
                <SelectSort />
            </div>

            <div style={{marginBottom: '10%'}}>
                <BuyingPostItemList />
            </div>
        </div>
    )
}

export default BuyingPosts;