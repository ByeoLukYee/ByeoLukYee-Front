import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyingPostItem from './BuyingPostItem';
import PageNumber from '../common/PageNumber';

function BuyingPostItemList({ data, checkData }) {
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 8;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    if (!data || data.length === 0) {
        return <p>게시글이 존재하지 않음.</p>;
    }


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return ( 
        <>
            <div className={styles['buying-grid-container']}>
                {currentPosts.map((post, index) => (
                    <div key={index} className={styles['buying-grid-item']}> 
                        <BuyingPostItem
                            post={post}
                            checkData={checkData}
                        />
                    </div>
                ))}
            </div>
            {data.length > postsPerPage && <PageNumber totalPosts={data.length} postsPerPage={postsPerPage} onPageChange={handlePageChange} />}
        </>
    )
}

export default BuyingPostItemList;