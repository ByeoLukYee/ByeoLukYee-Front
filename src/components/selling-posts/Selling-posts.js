import React, { useState } from 'react';

import '../../styles/common/styles.css';
import sellingPostStyle from '../../styles/selling-Item/selling-posts.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList';
import SelectSort from '../main/Select-sort';

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
                   <SelectSort />
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