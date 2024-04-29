import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { HOST } from '../../config/Config';
import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPostId.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import BuyingPostIdProducerInfo from './BuyingPostIdProducerInfo';
import BuyingPostIdInfo from './BuyingPostIdInfo';

function BuyingPostsId() {
    // 팝니다 글 쓴 정보를 보여주는 화면
    // /buying-posts/{id} GET
    // Image GET해서 exampleImg대신 src에 넣기
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/selling-posts/${id}`);
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch (error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        }
        fetchData();
    }, [id]);

    const price = data.price && data.price.toLocaleString();

    return (
        <>
            <div className={styles["container"]}>
                <Header />
                <div className={styles['topContainer']}>
                    <div className={styles['topDiv']}>
                        <div className={styles['imgDiv']}> <img src='/images/exampleImg.png' alt="product" /> </div>
                        <div className={styles['sellInformationContainer']}>
                            <div>
                                <div className={styles['titleDiv']}>
                                    <p>{data.title}</p>
                                    <div className={styles['moneyDiv']}> <p>{price}</p> <p>원</p> </div>
                                </div>
                                <hr />
                                <BuyingPostIdInfo data={data}/>
                            </div>
                            <div className={styles['buttonDiv']}>
                                {data.user && data.user.id !== 1 && (
                                    <>
                                        <button className={styles['chattingButton']}>채팅하기</button>
                                        <button className={styles['heartButton']}>찜하기</button>
                                    </>
                                )}
                                
                                {data.user && data.user.id === 1 && (
                                    <Link to={`/buying-posts/${id}/edit`}> <button className={styles['updateButton']}>수정하기</button> </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles['hrDiv']}> <hr /> </div>
                    <div className={styles['contextContainer']}>
                        <p>상품 정보</p> 
                        <div className={styles['informationDiv']}>
                            <p>{data.description}</p>
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