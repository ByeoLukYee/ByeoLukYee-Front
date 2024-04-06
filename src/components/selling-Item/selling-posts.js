import React, { useState } from 'react';

import sellingPostStyle from '../../styles/selling-Item/selling-posts.module.css';

import SellingItemList from '../selling-Item/sellingItemList';

function SellingPosts() {
    const [selectedSort, setSelectedSort] = useState('');

    const handleSortClick = (sortType) => {
        setSelectedSort(sortType);
    };

    return (
        <div style={{top: '7%', left: '15vw'}}>
            <div className={sellingPostStyle['sortText']}>
                <p style={{cursor: "pointer", color: selectedSort === "최신순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("최신순")}>최신순</p>
                <p style={{cursor: "pointer", color: selectedSort === "인기순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("인기순")}>인기순</p>
                <p style={{cursor: "pointer", color: selectedSort === "가격 낮은 순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("가격 낮은 순")}>가격 낮은 순</p>
            </div>

            <div style={{marginBottom: '40%'}}>
                <SellingItemList />
            </div>
        </div>
    )
}

export default SellingPosts;