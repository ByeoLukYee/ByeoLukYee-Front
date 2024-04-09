import React, { useState } from 'react';

import buyingStyle from '../../styles/buying-Item/buying-posts.module.css';

import BuyingPostItemList from './buyingPostItemList';
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