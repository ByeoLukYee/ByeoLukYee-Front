import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/common/Styles.css';
import styles from '../../styles/common/Header.module.css';

import SearchInput from './SearchInput';

function Header() {
    const navigate = useNavigate();

    // const userId = useSelector(state => state.userId);
    // const handleMenuClick = (path) => {
    //     if (!userId) {
    //         navigate("/signin");
    //     } else {
    //         navigate(path);
    //     }
    // }

    const handleMenuClick = (path) => {
        navigate(path);
    }

    return (
        <>
            <nav className={styles['nav']}>
                <div className={styles['container1']}>
                    <div className={styles['titleDiv']}> <p onClick={() => handleMenuClick('/')}>벼룩이</p> </div>
                    <div> <SearchInput /> </div>
                </div>
                <div className={styles['optionDiv']}>
                    <p onClick={() => handleMenuClick('/buying-posts/upload')} className={styles['link']}>팝니다 글쓰기</p>
                    <p onClick={() => handleMenuClick('/selling-posts/upload')} className={styles['link']}>삽니다 글쓰기</p>
                    <p onClick={() => handleMenuClick('/chatting')} className={styles['link']}>채팅</p>
                    <p onClick={() => handleMenuClick('/profile')} className={styles['link']}>마이페이지</p>
                </div>
            </nav>
            <div className={styles['hr']}> <hr /> </div>
        </>
    )
}

export default Header;