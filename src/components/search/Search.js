import React, { useState } from 'react';
import { useLocation } from 'react-router';

import '../../styles/common/Styles.css';
import styles from '../../styles/search/Search.module.css';

import Header from '../common/Header';
import SearchBuyingResult from './SearchBuyingResult';
import SearchSellingResult from './SearchSellingResult';
import Footer from '../common/Footer';

function Search() {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState('sell');
    const clickOption = (text) => {
        setSelected(text);
    }

    // 컴포넌트
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchKeyword = searchParams.get('keyword');
    const rederContent = () => {
        // 팝니다, 삽니다 게시글 검색 분리
        switch (selected) {
            case 'sell' :
                return (
                    <SearchSellingResult keyword={searchKeyword} data={data} setData={setData} />
                );

            case 'buy' :
                return (
                    <SearchBuyingResult keyword={searchKeyword} data={data} setData={setData} />
                );
        }
    }


    return (
        <>
            <Header />
            <div className={`${styles['container']} ${data.length === 0 ? styles['defaultHeight'] : styles['changeHeight']}`}>
                {/* 팝니다, 삽니다 게시글 선택지 */}
                <div className={styles['selectContainer']}>
                    <div className={`${selected === 'sell' ? styles['selected'] : styles['select']}`} onClick={() => clickOption('sell')}>
                        <p>팝니다 게시글</p>
                        <hr />
                    </div>

                    <div className={`${selected === 'buy' ? styles['selected'] : styles['select']}`} onClick={() => clickOption('buy')}>
                        <p>삽니다 게시글</p>
                        <hr />
                    </div>
                </div>
                {rederContent()}
            </div>
            <div className={styles['footer']}>
                <Footer />
            </div>
        </>
    )
}

export default Search;