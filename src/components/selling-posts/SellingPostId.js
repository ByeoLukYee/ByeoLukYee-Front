import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostId.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import SellingPostIdConsumerInfo from './SellingPostIdConsumerInfo';
import SellingPostIdInfo from './SellingPostIdInfo';
import CommentList from '../comment/CommentList';
import CommentInput from './CommentInput';

function SellingPostId() {
    const navigate = useNavigate();
    const [showBuyingInput, setShowBuyingInput] = useState(false);
    const [selectedCommentIndex, setSelectedCommentIndex] = useState(null);
    const [data, setData] = useState([]);
    const [commentData, setCommentData] = useState([]);
    const { id } = useParams();

    const price = data.price && data.price.toLocaleString();
    const successful = commentData.some(comment => comment.krStatus === '낙찰');
    const userId = Number(useSelector(state => state.userId));

    const handleBuyButtonClick = () => {
        setShowBuyingInput(prevState => !prevState);
    };
    
    // /selling-posts/{id}에서 GET
    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/buying-posts/${id}`);
            if (response.status === 200) {
                setData(response.data);
                // 댓글 api 불러오기
                const commentResponse = await axios.get(`${process.env.REACT_APP_HOST}/buying-posts/${id}/selling-comments`);
                if(commentResponse.status === 200) {
                    console.log("댓글 정보 불러오기 성공");
                    setCommentData(commentResponse.data);
                } else {
                    console.log("댓글 정보 불러오기 실패", commentResponse.status);
                }
            }
        } catch (error) {
            console.error("데이터 가져오기 실패: ", error);
        }
    }

    // 게시글 조회 서버
    async function Check() {
        try {
            const reqeust = await axios.post(`${process.env.REACT_APP_HOST}/view-histories?type=buying`, {
                postId: id,
                userId: userId
            });
            if (reqeust.status === 201) {
                console.log("게시글 조회 성공");
            } else {
                console.log("게시글 조회 실패", reqeust.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        Check();
    }, []);
    
    const complete = async () => {
        if (selectedCommentIndex === null) return;
        try {
            // 삽니다 게시물 경매완료
            const response = await axios.put(`${process.env.REACT_APP_HOST}/buying-posts/${id}`, {
                ...data,
                krStatus: "경매완료",
                status: 'COMPLETE'
            });
            if (response.status === 200) {
                console.log("댓글 선택 성공");
                // 댓글 낙찰
                const selectedComment = commentData[selectedCommentIndex];
                const commentResponse = await axios.put(`${process.env.REACT_APP_HOST}/selling-comments/${selectedComment.id}`, {
                    ...selectedComment,
                    krStatus: "낙찰",
                    status: 'WON'
                });

                if(commentResponse.status === 200) {
                    console.log("댓글 낙찰 성공");
                    navigate('/buying-posts');
                } else {
                    console.log("댓글 낙찰 실패", commentResponse.status);
                }
            } else {
                console.log("댓글 선택 실패", response.status)
            }
        } catch (error) {
            console.error("서버 연결 실패: ", error);
        }
    };

    return (
        <div className={styles['container']}>
            <Header />
            
            <div className={styles['allContainer']}>
                <div className={styles['topContainer']}>
                    <div className={styles['container1']}>
                        <div className={styles['contextDiv']}>
                            <p>{data ? data.title : '제목없음'}</p>
                            <hr />
                            <pre>{data ? data.description : '내용없음'}</pre>
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
                            
                            {data.user && data.user.id === userId && (
                                <div className={successful || selectedCommentIndex === null ? styles['disabledButton'] : styles['selectButton']}>
                                    <button onClick={complete} disabled={successful || selectedCommentIndex === null}>선택하기</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles['hr']}> <hr /> </div>
                <div className={styles['bottomContainer']}>
                    <p>경매댓글</p>
                    <div className={styles['commentContainer']}>
                        {showBuyingInput && <CommentInput addComments={fetchData} setShowBuyingInput={setShowBuyingInput} />}
                        <CommentList 
                            data={commentData} 
                            setSelectedCommentIndex={setSelectedCommentIndex} 
                            selectedCommentIndex={selectedCommentIndex} 
                            disableSelection={successful}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SellingPostId; 
