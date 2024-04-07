import React, { useState } from 'react';

import sellingPostStyle from '../../styles/selling-Item/selling-posts-item.module.css';

import SellingPostItemList from './sellingPostItemList';

function SellingPosts() {
    const [selectedSort, setSelectedSort] = useState('');
    const [selected, setSelected] = useState('1');

    const handleSortClick = (sortType) => {
        setSelectedSort(sortType);
    };
    const handleSelectedClick = (number) => {
        setSelected(number);
    };

    return (
        <>
            <div style={{width: '85%', left: '15vw', marginTop: '2%'}}>
                <div className={sellingPostStyle['sortText']}>
                    <p style={{cursor: "pointer", color: selectedSort === "최신순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("최신순")}>최신순</p>
                    <p style={{cursor: "pointer", color: selectedSort === "인기순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("인기순")}>인기순</p>
                    <p style={{cursor: "pointer", color: selectedSort === "가격 낮은 순" ? "#424242" : "#D2D2D2"}} onClick={() => handleSortClick("가격 낮은 순")}>가격 낮은 순</p>
                </div>

                <div style={{marginBottom: '10%'}}>
                    <SellingPostItemList />
                </div>
            </div>

            <div className={sellingPostStyle['selectDiv']}>
                <div className={sellingPostStyle[selected === '1' ? 'selected' : '']} onClick={() => handleSelectedClick('1')}> <p>1</p> </div>
            </div>
        </>
    )
}

export default SellingPosts;