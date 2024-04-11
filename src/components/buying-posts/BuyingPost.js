import React from 'react';

import '../../styles/common/Styles.css';
import buyingStyle from '../../styles/buying-posts/BuyingPost.module.css';

import BuyingPostItemList from '../buying-Item/BuyingPostItemList';
import SelectSort from '../main/SelectSort';

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