import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlyBuy.module.css';

import BuyPostItemList from "../buying-Item/BuyPostItemList";

function RecentlyBuy() {
    return (
        <>
            <div className={styles['buyTextDiv']}> <p>따끈따근 최신 삽니다 글</p> </div>
            <div className={styles['buyContainer']}>
                <BuyPostItemList />
            </div>

            <div className={styles['buyMoreDiv']}>
                <Link to='/buying-posts' style={{ textDecoration: 'none', color: '#C0C0C0' }}> <p>더보기</p> </Link>
            </div>
        </>
    )
}

export default RecentlyBuy;