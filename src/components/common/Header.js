import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/common/Header.module.css';

import SearchInput from './SearchInput';

function Header({ onTitleClick }) {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('id');
        if (!userId) {
            navigate('/signin');
        }
    }, [navigate]);

    const handleMenuClick = (path) => {
        navigate(path);
    }

    return (
        <>
            <nav className={styles['nav']}>
                <div className={styles['container1']}>
                    <div className={styles['titleDiv']} onClick={onTitleClick}> <p onClick={() => handleMenuClick('/')}>벼룩이</p> </div>
                    <div> <SearchInput /> </div>
                </div>
                <div className={styles['optionDiv']}>
                    <p onClick={() => handleMenuClick('/buying-posts/upload')} className={styles['link']}>팝니다 글쓰기</p>
                    <p onClick={() => handleMenuClick('/selling-posts/upload')} className={styles['link']}>삽니다 글쓰기</p>
                    <p onClick={() => handleMenuClick('/chatting')} className={styles['link']}>채팅</p>
                    <p onClick={() => handleMenuClick('/profile')} className={styles['link']}>마이페이지</p>
                </div>
            </nav>
            <div style={{textAlign: 'center'}}> <hr /> </div>
        </>
    )
}

export default Header;