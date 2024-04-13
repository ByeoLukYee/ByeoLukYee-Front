import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/common/Header.module.css';

import SearchInput from './SearchInput';

function Header({ onTitleClick }) {
    return (
        <>
            <nav className={styles['nav']}>
                <div className={styles['container1']}>
                    <Link to='/' className={styles['link']}> <div className={styles['titleDiv']} onClick={onTitleClick}> <p>벼룩이</p> </div> </Link>
                    <div> <SearchInput /> </div>
                </div>
                <div className={styles['optionDiv']}>
                    <Link to='/buying-posts/upload' className={styles['link']}> <p>팝니다 글쓰기</p> </Link>
                    <Link to='/selling-posts/upload' className={styles['link']}> <p>삽니다 글쓰기</p> </Link>
                    <Link to='/chatting' className={styles['link']}> <p>채팅</p> </Link>
                    <Link to='/profile' className={styles['link']}> <p>마이페이지</p> </Link>
                </div>
            </nav>
            <div style={{textAlign: 'center'}}> <hr /> </div>
        </>
    )
}

export default Header;