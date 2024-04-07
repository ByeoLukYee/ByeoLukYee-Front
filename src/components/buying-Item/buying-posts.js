import React, { useState } from 'react';

import buyingStyle from '../../styles/buying-Item/buying-post-item.module.css';

import BuyingPostItemList from './buyingPostItemList';

function BuyingPosts() {
    const [selectedSort, setSelectedSort] = useState('');

    const handleSortClick = (sortType) => {
        setSelectedSort(sortType);
    };

    return (
        <div style={{left: '15vw'}}>
            <div className={buyingStyle['sortText']}>
                <p style={{cursor: "pointer", color: selectedSort === "최신순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("최신순")}>최신순</p>
                <p style={{cursor: "pointer", color: selectedSort === "인기순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("인기순")}>인기순</p>
                <p style={{cursor: "pointer", color: selectedSort === "가격 낮은 순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("가격 낮은 순")}>가격 낮은 순</p>
            </div>

            <div style={{marginBottom: '10%'}}>
                <BuyingPostItemList />
            </div>
        </div>
    )
}

export default BuyingPosts;