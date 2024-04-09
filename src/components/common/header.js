import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { isLoggedIn } from '../../sevices/auth/auth';

import '../../styles/common/Styles.css';
import styles from '../../styles/common/Header.module.css';

import SearchInput from './SearchInput';

function Header({ onTitleClick }) {
    const navigate = useNavigate();

    // const handleWriteClick = (text) => {
    //     if (!isLoggedIn()) {
    //         navigate('/signin');
    //     } else {
    //         switch (text) {
    //             case 'selling-write' : navigate('/selling-write')
    //             case 'buying-write' : navigate('/buying-write')
    //             case 'chatting' : navigate('/chatting')
    //             case 'mypage' : navigate('/mypage')
    //         }
    //     }
    // };

    return (
        <>
            <nav className={styles['nav']}>
                <div className={styles['container1']}>
                    <Link to='/' style={{ textDecoration: "none", color: 'black' }}> <div className={styles['titleDiv']} onClick={onTitleClick}> <p>벼룩이</p> </div> </Link>
                    <div> <SearchInput /> </div>
                </div>
                <div className={styles['optionDiv']}>
                    {/* <p onClick={handleWriteClick('selling-write')}>팝니다 글쓰기</p>
                    <p onClick={handleWriteClick('buying-write')}>삽니다 글쓰기</p>
                    <p onClick={handleWriteClick('chatting')}>채팅</p>
                    <p onClick={handleWriteClick('mypage')}>마이페이지</p> */}

                    <Link to={'/buying-posts/upload'} style={{textDecoration: 'none', color: 'black'}}> <p>팝니다 글쓰기</p> </Link>
                    <Link to={'/selling-posts/upload'} style={{textDecoration: 'none', color: 'black'}}> <p>삽니다 글쓰기</p> </Link>
                    <p>채팅</p>
                    <p>마이페이지</p>
                </div>
            </nav>
            <div style={{textAlign: 'center'}}> <hr /> </div>
        </>
    )
}

export default Header;