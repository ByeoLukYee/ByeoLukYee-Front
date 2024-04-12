import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import headerStyle from '../../styles/common/Header.module.css';

import SearchInput from './SearchInput-change';

function Header({ onTitleClick }) {
    return (
        <>
            <nav className={headerStyle['nav']}>
                <div className={headerStyle['container1']}>
                    <Link to='/' style={{ textDecoration: "none", color: 'black' }}> <div className={headerStyle['titleDiv']} onClick={onTitleClick}> <p>벼룩이</p> </div> </Link>
                    <div> <SearchInput /> </div>
                </div>
                <div className={headerStyle['optionDiv']}>
                    <Link to='/buying-posts/upload' style={{ textDecoration: "none", color: 'black' }}> <p>팝니다 글쓰기</p> </Link>
                    <Link to='/selling-posts/upload' style={{ textDecoration: "none", color: 'black' }}> <p>삽니다 글쓰기</p> </Link>
                    <p>채팅</p>
                    <Link to='/profile' style={{ textDecoration: "none", color: 'black' }}> <p>마이페이지</p> </Link>
                </div>
            </nav>
            <div style={{textAlign: 'center'}}> <hr /> </div>
        </>
    )
}

export default Header;