import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/common/Header.module.css';

import SearchInput from './SearchInput';

import { useSelector } from 'react-redux';

function Header({ onTitleClick }) {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const navigate = useNavigate();

    const handleMenuClick = (path) => {
        if (!isLoggedIn) {
            console.log('로그인 안함');
            navigate('/signin');
        } else {
            navigate(path);
        }
    };

    return (
        <>
            <nav className={styles['nav']}>
                <div className={styles['container1']}>
                    <div className={styles['titleDiv']} onClick={onTitleClick}> <p onClick={() => handleMenuClick('/')}>벼룩이</p> </div>
                    <div> <SearchInput /> </div>
                </div>
                <div className={styles['optionDiv']}>
                    {/* <Link to='/buying-posts/upload' className={styles['link']}> <p>팝니다 글쓰기</p> </Link>
                    <Link to='/selling-posts/upload' className={styles['link']}> <p>삽니다 글쓰기</p> </Link>
                    <Link to='/chatting' className={styles['link']}> <p>채팅</p> </Link>
                    <Link to='/profile' className={styles['link']}> <p>마이페이지</p> </Link> */}
                    
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