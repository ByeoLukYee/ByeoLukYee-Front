import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/main/SelectPost.module.css';

const SelectPost = () => {
    return (
        <>
            <div className={styles['textDiv']}>
                <Link to='/selling-posts' style={{ textDecoration: 'none', color: 'black' }}> 
                    {/* onClick={() => setSelectedTab('sell')} */}
                    <p className={window.location.pathname === '/selling-posts' ? styles['textActive'] : styles['text']}>팝니다 게시글</p> 
                </Link>
                
                <Link to='/buying-posts' style={{ textDecoration: 'none', color: 'black' }}> 
                    {/* onClick={() => setSelectedTab('buy')} */}
                    <p className={window.location.pathname === '/buying-posts' ? styles['textActive'] : styles['text']}>삽니다 게시글</p> 
                </Link>
            </div>
        </>
    );
};

export default SelectPost;