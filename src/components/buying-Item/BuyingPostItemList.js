import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyingPostItem from './BuyingPostItem';
import PageNumber from '../common/PageNumber';

function BuyingPostItemList({ data }) {
    // 삽니다 게시글 itemList 컴포넌트
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    if (data.length === 0) {
        return <p>게시글이 존재하지 않음.</p>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 삽니다 글쓰기 itemList 컴포넌트
  // BuyingPost.js에서 받은 데이터 title, status, price, desc, userName를 BuyingPostItem에 전달하기
    return ( 
        <>
            <div className={styles['buying-grid-container']}>
                {currentPosts.map(post => (
                    <div key={post.id} className={styles['buying-grid-item']}> 
                        <BuyingPostItem
                            title={post.title}
                            status={post.krStatus}
                            price={post.price}
                            desc={post.description}
                            userName={post.user.name}
                        />
                    </div>
                ))}
            </div>
            {data.length > postsPerPage && <PageNumber totalPosts={data.length} postsPerPage={postsPerPage} onPageChange={handlePageChange} />}
        </>
    )
}

export default BuyingPostItemList;