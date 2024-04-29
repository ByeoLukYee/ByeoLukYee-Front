import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostId.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import SellingPostIdConsumerInfo from './SellingPostIdConsumerInfo';
import SellingPostIdInfo from './SellingPostIdInfo';
import SellingInput from  './SellingCommentInput';
import CommentList from '../comment/CommentList';

function SellingPostId() {
    const [showBuyingInput, setShowBuyingInput] = useState(false);

    const handleBuyButtonClick = () => {
        setShowBuyingInput(prevState => !prevState);
    };
    
    // /selling-posts/{id}에서 GET
    const [data, setData] = useState([]);
    const [commentData, setCommentData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/buying-posts/${id}`);
                if (response.status === 200) {
                    setData(response.data);
                    // 댓글 api 불러오기
                    const commentResponse = await axios.get(`${HOST}/buying-posts/${id}/selling-comments`);
                    if(commentResponse.status === 200) {
                        setCommentData(commentResponse.data);
                    }
                }
            } catch (error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        }

        fetchData();
    }, [id]);

    const price = data.price && data.price.toLocaleString();
    const successful = commentData.some(comment => comment.krStatus === '낙찰');

    return (
        <div className={styles['container']}>
            <Header />
            
            <div className={styles['allContainer']}>
                <div className={styles['topContainer']}>
                    <div className={styles['container1']}>
                        <div className={styles['contextDiv']}>
                            <p>{data.title}</p>
                            <hr />
                            <p>{data.description}</p>
                        </div>
                        <div className={styles['priceDiv']}>
                            <p>희망 거래 가격</p>
                            <div className={styles['price']}> <p>{price}</p> <p>원 이하</p> </div>
                        </div>
                    </div>
                    <div className={styles['container2']}>
                        <div className={styles['profile']}>
                            <div className={styles['information']}>
                                {data.user && (
                                    <SellingPostIdConsumerInfo user={data.user} />
                                )}
                                <SellingPostIdInfo data={data} />
                            </div>
                            {data.user && data.user.id !== 1 && (
                                <>
                                   <div className={styles['particButton']}> <button onClick={handleBuyButtonClick}>참여하기</button> </div>
                                </>
                            )}
                            
                            {data.user && data.user.id === 1 && !successful &&(
                                <>
                                    <div className={styles['selectButton']}> <button>선택하기</button> </div>
                                </>
                            )}
                            {data.user && data.user.id === 1 && successful && (
                                <>
                                    <div className={styles['disabledButton']}> <button disabled>선택하기</button> </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles['hr']}> <hr /> </div>
                <div className={styles['bottomContainer']}>
                    <p>경매댓글</p>
                    <div className={styles['commentContainer']}>
                        {showBuyingInput && <SellingInput />}
                        <CommentList data={commentData}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SellingPostId; 
