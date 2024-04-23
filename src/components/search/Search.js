import '../../styles/common/Styles.css';
import styles from '../../styles/search/Search.module.css';

import Header from '../common/Header';
import PageNumber from '../common/PageNumber';
import Footer from '../common/Footer';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
    const [selected, setSelected] = useState('');

    const clickOption = (text) => {
        setSelected(text);
    }

    const rederContent = () => {
        // 팝니다, 삽니다 게시글 검색 분리
    }

    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const searchKeyword = searchParams.get('keyword');
    // {searchKeyword}

    // /selling-posts와 /buying-posts에 저장된 게시글 데이터를 GET하여
    // 내가 검색창에 입력 값과 일치하거나 포함되어있는 데이터가 있으면 그 데이터만 가져와서 화면에 보여주기

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