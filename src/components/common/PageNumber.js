import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/common/PageNumber.module.css';

function PageNumber({ totalPosts, postsPerPage, onPageChange }) {
    const [selected, setSelected] = useState(1);
    const pageCount = Math.ceil(totalPosts / postsPerPage);
    const handleSelectedClick = (number) => {
        setSelected(number);
        onPageChange(number);
    };

    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    let pathName = window.location.pathname;

    return (
        <>
            <div className={pathName === '/selling-posts' ? styles['sellingSelectDiv'] : (pathName === '/buying-posts' ? styles['buyingSelectDiv'] : '')}>
                <div className={styles['div']}>
                    {pageNumbers.map(number => (
                        <div key={number} className={number === selected ? styles['selected'] : ''} onClick={() => handleSelectedClick(number)}>
                            <p>{number}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PageNumber;