import React from 'react';

import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from './BuyPostItem';

function BuyPostItemList({ data }) {
  // main 화면에 최근 본 팝니다 최신 글 데이터 정보 가지고 오기
  if (data.length === 0) {
      return <p>게시글이 존재하지 않음.</p>
  }
  
  const pathName = window.location.pathname;
  let className = '';
  if (pathName === '/') {
    className = 'home-grid-container';
  } else if (pathName === '/profile') {
    className = 'profile-grid-container';
  }

  let price = 0;
  return (
      <div className={styles[className]}>
          {data.map(post => (
            price = post.price && post.price.toLocaleString(),
            <div className={styles['buy-grid-item']} key={post.id}>
                <BuyPostItem 
                  title = {post.title}
                  description = {post.description}
                  price = {price}
                  status={post.krStatus}
                  id={post.id}
                />
            </div>
          ))}
      </div>
  )
}

export default BuyPostItemList;