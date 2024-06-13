import React from 'react';

import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from './BuyPostItem';

function BuyPostItemList({ data, viewData }) {
  // main 화면에 최근 본 팝니다 최신 글 데이터 정보 가지고 오기
  if (!data || data.length === 0) {
    return <p>게시글이 존재하지 않습니다.</p>;
  }

  return (
      <div className={styles['home-grid-container']}>
          {data.map((post, index) => (
            <div className={styles['buy-grid-item']} key={index}>
                <BuyPostItem 
                  post={post}
                  viewData={viewData}
                />
            </div>
          ))}
      </div>
  )
}

export default BuyPostItemList;