import React, { useState, useEffect } from 'react';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-Item/SellGrid.module.css';

import SellingPostItem from './SellingPostItem';
import PageNumber from '../common/PageNumber';

function SellingPostItemList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 16;
  
  if (!data || data.length === 0) {
    return <p>게시글이 존재하지 않음.</p>;
  }

  const pathName = window.location.pathname;
  let className = '';
  if (pathName === '/') {
    className = 'four-grid-container';
  } else if (pathName === '/profile') {
    className = 'three-grid-container';
  } else {
    className = 'all-grid-container';
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  // 팝니다 글쓰기 itemList 컴포넌트
  // SellingPost.js에서 받은 데이터 title, status, price를 SellingPostItem에 전달하기
  let price = 0;
  return (
      <>
        <div className={styles[className]}>
          {currentPosts.map(post => (
              price = post.price && post.price.toLocaleString(),
              <div key={post.id} className={styles['grid-item']}> 
                  <SellingPostItem
                      title={post.title}
                      status={post.krStatus}
                      price={price}
                      id={post.id}
                  />
              </div>
          ))}
        </div>
        
        {data.length > postsPerPage && 
          <PageNumber 
            totalPosts={data.length} 
            postsPerPage={postsPerPage} 
            onPageChange={handlePageChange}
          />
        }
      </>
  )
}

export default SellingPostItemList;