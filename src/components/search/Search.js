import React, { useState } from 'react';
import { useLocation } from 'react-router';

import '../../styles/common/Styles.css';
import styles from '../../styles/search/Search.module.css';

import Header from '../common/Header';
import PageNumber from '../common/PageNumber';
import SearchBuyingResult from './SearchBuyingResult';
import SearchSellingResult from './SearchSellingResult';
import Footer from '../common/Footer';

function Search() {
    const [selected, setSelected] = useState('sell');

    const clickOption = (text) => {
        setSelected(text);
    }

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchKeyword = searchParams.get('keyword');
    const rederContent = () => {
        // 팝니다, 삽니다 게시글 검색 분리
        switch (selected) {
            case 'sell' : return <SearchSellingResult keyword={searchKeyword} />;
            case 'buy' : return <SearchBuyingResult keyword={searchKeyword} />;
        }
    }


    return (
        <>
            <Header />
            <div className={styles['container']}>
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
            <PageNumber />
            <Footer />
        </>
    )
}

export default Search;