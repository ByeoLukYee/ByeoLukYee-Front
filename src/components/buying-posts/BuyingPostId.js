import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

import styles from '../../styles/buying-posts/BuyingPostId.module.css';
import '../../styles/common/Styles.css';

import Footer from '../common/Footer';
import Header from '../common/Header';
import BuyingPostIdInfo from './BuyingPostIdInfo';
import BuyingPostIdProducerInfo from './BuyingPostIdProducerInfo';
import { viewCountContext } from '../selling-posts/ViewCountProvider';

import { FaRegCircle } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa6";

function BuyingPostsId() {
    const navigate = useNavigate();
    const { sellingViewCount } = useContext(viewCountContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const [wishes, setWishes] = useState([]);
    const [liked, setLiked] = useState(false);
    const { id } = useParams();
    
    const price = data.price && data.price.toLocaleString();
    const userId = Number(useSelector(state => state.userId));

    // 게시글 조회 서버
    async function Check() {
        try {
            const reqeust = await axios.post(`${process.env.REACT_APP_HOST}/view-histories?type=selling`, {
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

    // 팝니다 단일 조회 및 찜한 목록 조회 서버
    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/selling-posts/${id}`);
            if (response.status === 200) {
                console.log("팝니다 단일 조회 성공");
                setData(response.data);
                const wishesResponse = await axios.get(`${process.env.REACT_APP_HOST}/wishes/checking`, {
                    params: {
                        user: userId,
                        post: id
                    }
                });
                if (wishesResponse.status === 200) {
                    console.log("찜하기 데이터 가져오기 성공");
                    setWishes(wishesResponse.data);
                    setLiked(wishesResponse.data.isLiked);
                } else {
                    console.log("찜하기 데이터 가져오기 실패", wishesResponse.status);
                }
            } else {
                console.log("팝니다 단일 조회 실패", response.status);
            }
        } catch (error) {
            console.error("데이터 가져오기 실패: ", error);
        }
    }

    // 이미지 여러개일 경우 >, < 누르면 다음 이미지, 이전 이미지 표시
    const nextImage = () => {
        if (currentIndex < data.images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };
    const preImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(data.images.length - 1);
        }
    };

    // 찜하기 서버
    const handleClickedWish = async () => {
        try {
            const reqeust = await axios.post(`${process.env.REACT_APP_HOST}/wishes`, {
                userId: userId,
                postId: id
            });
            if (reqeust.status === 201) {
                console.log("찜하기 서버 요청 성공");
                fetchData();
                setLiked(wishes.isLiked);
            } else {
                console.log("찜하기 서버 요청 실패", reqeust.status);
            }
        } catch (error) {
            console.error("서버 연결 실패", error);
        }
    }

    // 채팅룸 만드는 서버
    const makeChattingRoom = async () => {
        try {
            const reqeust = await axios.post(`${process.env.REACT_APP_HOST}/chatrooms`, {
                user1: userId,
                user2: data.user.id
            });
            if (reqeust.status === 200) {
                console.log("채팅방 만들기 성공");
                navigate('/catting');
            } else {
                console.log("채팅방 만들기 실패", reqeust.status);
            }
        } catch(error) {
            if (error.response.status === 409) {
                // 존재한 채팅방으로 이동하기
                navigate('/chatting');
            } else {
                console.error("서버 연결 실패", error);
            }
        }
    }

    useEffect(() => {
        Check();
    }, []);

    useEffect(() => {
        fetchData();
    }, [id, userId]);

    return (
        <>
            <div className={styles["container"]}>
                <Header />
                <div className={styles['topContainer']}>
                    <div className={styles['topDiv']}>
                        <div className={styles['imgDiv']}>
                            {data && data.images && data.images.length >= 2 &&
                                <FaChevronLeft className={`${styles['leftIcon']} ${styles['icon']}`} onClick={preImage} />
                            }
                            {data && data.images && data.images.length > 0 ? (
                                data.images.map((image, index) => (
                                    <img key={index} src={`${process.env.REACT_APP_IMAGEURL}/${image.uploadedFilename}`} alt="image" style={{ display: index === currentIndex ? 'block' : 'none' }} />
                                ))
                            ) : (
                                <img src='/images/notImage.png' alt="example image" />
                            )}
                            {data && data.images && data.images.length >= 2 &&
                                <FaChevronRight className={`${styles['rightIcon']} ${styles['icon']}`} onClick={nextImage} />
                            }
                            <div className={styles['circles']}>
                                {data && data.images && data.images.length >= 2 && data.images.map((_, index) => (
                                    index === currentIndex ?
                                        <FaCircle key={index} className={styles['fillCircle']} /> :
                                        <FaRegCircle key={index} className={styles['circle']} />
                                ))}
                            </div>
                        </div>
                        <div className={styles['sellInformationContainer']}>
                            <div>
                                <div className={styles['titleDiv']}>
                                    <p>{data.title}</p>
                                    <div className={styles['moneyDiv']}> <p>{price}</p> <p>원</p> </div>
                                </div>
                                <hr />
                                <BuyingPostIdInfo data={data} sellingViewCount={sellingViewCount} />
                            </div>
                            <div className={styles['buttonDiv']}>
                                {data.user && data.user.id !== userId && (
                                    <>
                                        <button className={styles['chattingButton']} onClick={makeChattingRoom}>채팅하기</button>
                                        <button
                                            className={liked ? styles['selectButton'] : styles['heartButton']}
                                            onClick={handleClickedWish}
                                        >
                                            찜하기
                                        </button>
                                    </>
                                )}

                                {data.user && data.user.id === userId && (
                                    <Link to={`/buying-posts/${id}/edit`}> <button className={styles['updateButton']}>수정하기</button> </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles['hrDiv']}> <hr /> </div>
                    <div className={styles['contextContainer']}>
                        <p>상품 정보</p>
                        <div className={styles['informationDiv']}>
                            <pre>{data.description}</pre>
                        </div>
                    </div>
                    <div className={styles['hrDiv']}> <hr /> </div>
                    <div className={styles['contextContainer']}>
                        <p>판매자 정보</p>
                        <div className={styles['userContainer']}>
                            <div className={styles['userDiv']}>
                                {data.user && (
                                    <BuyingPostIdProducerInfo user={data.user} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default BuyingPostsId;