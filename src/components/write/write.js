import React, { useState } from 'react';
import styles from '../../styles/common/styles.css';
import writeStyle from '../../styles/write/write.module.css';

import TitleBar from '../common/titleBar';
import SellWrite from '../write/sellWrite';
import BuyWrite from '../write/buyWrite';

function Write() {
    const [selectedTab, setSelectedTab] = useState('sell');
    return (
        <div className={writeStyle['divContainer']}>
            <TitleBar />
            <div className={writeStyle['DivStyle']}>
                <p>중고거래 글쓰기</p>
            </div>
            <div className={writeStyle['mainDiv']}>
                <div className={writeStyle['tabBarDiv']}>
                    <div className={selectedTab === 'sell' ? writeStyle['sellDivActive'] : writeStyle['sellDiv']} onClick={() => setSelectedTab('sell')}>
                        <button>팝니다</button>
                        <hr />
                    </div>
                    <div className={selectedTab === 'buy' ? writeStyle['buyDivActive'] : writeStyle['buyDiv']} onClick={() => setSelectedTab('buy')}>
                        <button>삽니다</button>
                        <hr />
                    </div>
                </div>

                <div className={writeStyle['changeBody']}>
                    {selectedTab === 'sell' ? <SellWrite /> : <BuyWrite />}
                </div>
            </div>
        </div>
    )
}

export default Write;