import React, { useState } from 'react';
import styles from '../../styles/common/styles.css';
import storeStyle from '../../styles/store/store.module.css';

import TitleBar from '../common/titleBar';
import SearchInput from '../common/searchInput';
import SellDiv from '../common/sellDiv';
import BuyDiv from '../common/buyDiv';

import { IoIosArrowDown } from "react-icons/io";

function Store() {
    const [selectedTab, setSelectedTab] = useState('sell');
    return (
        <div className={storeStyle['divContainer']}>
            <TitleBar />
            <div className={storeStyle['DivStyle']}>
                <p>벼룩이 마켓</p>
            </div>
            <SearchInput />
            <div className={storeStyle['mainDiv']}>
                <div className={storeStyle['tabBarDiv']}>
                    <div className={selectedTab === 'sell' ? storeStyle['sellDivActive'] : storeStyle['sellDiv']} onClick={() => setSelectedTab('sell')}>
                        <button>팝니다</button>
                        <hr />
                    </div>
                    <div className={selectedTab === 'buy' ? storeStyle['buyDivActive'] : storeStyle['buyDiv']} onClick={() => setSelectedTab('buy')}>
                        <button>삽니다</button>
                        <hr />
                    </div>
                </div>

                {/* 정렬 목록 */}
                <div className={storeStyle['sortDiv']}>
                    <p>최신순</p>
                    <IoIosArrowDown className={storeStyle['sortIcon']}/>
                </div>

                <div className={storeStyle['changeBody']}>
                    <div className={storeStyle['scrollContainer']}>
                        {selectedTab === 'sell' ? <SellDiv /> : <BuyDiv />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;