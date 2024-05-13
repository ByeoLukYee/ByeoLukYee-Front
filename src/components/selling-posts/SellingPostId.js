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
    const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);
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

    const complete = async () => {
        try {
            // 삽니다 게시물 경매완료
            const selectedComment = data[selectedCommentIndex];
            const response = await axios.put(`${HOST}/buying-posts/${id}`, {
                title: selectedComment.title,
                description: selectedComment.description,
                price: selectedComment.price,
                location: selectedComment.location,
                status: "COMPLATE"
            });
            if (response.status === 200) {
                console.log("댓글 선택 성공");
                // 댓글 낙찰
                const selectedComment = commentData[selectedCommentIndex];
                const commentResponse = await axios.put(`${HOST}/selling-comments/${commentData.id}`, {
                    title: selectedComment.title,
                    description: selectedComment.description,
                    price: selectedComment.price,
                    location: selectedComment.location,
                    status: "WON"
                });
                if(commentResponse.status === 200) {
                    console.log("댓글 낙찰 성공");
                }
            }
        } catch (error) {
            console.error("댓글 선택 실패: ", error);
        }
    };

    const price = data.price && data.price.toLocaleString();
    const successful = commentData.some(comment => comment.krStatus === '낙찰');
    const userId = Number(localStorage.getItem('userId'));

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
                            {data.user && data.user.id !== userId && (
                                <>
                                   <div className={styles['particButton']}> <button onClick={handleBuyButtonClick}>참여하기</button> </div>
                                </>
                            )}
                            
                            {data.user && data.user.id === userId && (successful || selectedCommentIndex !== null) && (
                                <div className={styles['selectButton']}> 
                                    <button onClick={complete}>선택하기</button> 
                                </div>
                            )}
                            {data.user && data.user.id === userId && (!successful && selectedCommentIndex === null) && (
                                <div className={styles['disabledButton']}>
                                    <button disabled>선택하기</button> 
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles['hr']}> <hr /> </div>
                <div className={styles['bottomContainer']}>
                    <p>경매댓글</p>
                    <div className={styles['commentContainer']}>
                        {showBuyingInput && <SellingInput />}
                        <CommentList data={commentData} setSelectedCommentIndex={setSelectedCommentIndex} selectedCommentIndex={selectedCommentIndex} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SellingPostId; 
