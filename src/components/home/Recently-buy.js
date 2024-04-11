import React, { useState } from 'react';

import '../../styles/common/styles.css';
import styles from '../../styles/home/Recently-buy.module.css';

import BuyPostItemList from "../buying-Item/buyPostItemList";

function RecentlyBuy() {
    return (
        <>
            <div className={styles['buyTextDiv']}> <p>따끈따근 최신 삽니다 글</p> </div>
            <div className={styles['buyContainer']}>
                <BuyPostItemList />
            </div>

            <div className={styles['buyMoreDiv']}>
                <p>더보기</p>
            </div>
        </>
    )
}

export default RecentlyBuy;