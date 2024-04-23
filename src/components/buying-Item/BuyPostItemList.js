import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';

import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from './BuyPostItem';

function BuyPostItemList() {
  // main 화면에 최근 본 팝니다 최신 글 데이터 정보 가지고 오기
  const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        async function fetchLatestPosts() {
            try {
                const response = await axios.get(`${HOST}/selling-posts?limit=4&sortBy=createdAt:desc`);
                setLatestPosts(response.data);
            } catch(error) {
                console.error("요청 실패 : ", error);
            }
        }

        fetchLatestPosts();
    }, []);

    // if (buyingPostList.length === 0) {
    //     return <p>게시글이 존재하지 않음.</p>
    // }
    
    const pathName = window.location.pathname;
    let className = '';
    if (pathName === '/') {
      className = 'home-grid-container';
    } else if (pathName === '/profile') {
      className = 'profile-grid-container';
    }

    return (
        <div className={styles[className]}>
            {/* <div className={styles['buy-grid-item']}> <BuyPostItem /> </div>/ */}

            {latestPosts.map(post => (
              <div className={styles['buy-grid-item']} key={post.id}>
                  <BuyPostItem 
                    title = {post.title}
                    description = {post.description}
                    price = {post.price}
                  />
              </div>
            ))}
        </div>
    )
}

export default BuyPostItemList;