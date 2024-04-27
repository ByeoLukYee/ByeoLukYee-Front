import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { HOST } from '../../config/Config';

import '../../styles/common/Styles.css';
import buyingPostsIdStyle from '../../styles/buying-posts/BuyingPostId.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import BuyingPostIdProducerInfo from './BuyingPostIdProducerInfo';
import BuyingPostIdInfo from './BuyingPostIdInfo';

function BuyingPostsId() {
    // 팝니다 글 쓴 정보를 보여주는 화면
    // /buying-posts/{id} GET해서
    // title, price, desc는 BuyingPostId
    // krStatus, location는 BuyingPostIdInfo(판매중, 조회수, 찜횟수)
    // user/name, studentId는 BuyingPostIdProducerInfo(글 쓴 사람 이름, 학번, 팝니다 갯수, 삽니다 갯수)
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
    console.log(data);

    const price = data.price && data.price.toLocaleString() + '원';
    
    return (
        <>
            <div className={buyingPostsIdStyle["container"]}>
                <Header />
                <div className={buyingPostsIdStyle['topContainer']}>
                    <div className={buyingPostsIdStyle['topDiv']}>
                        <div className={buyingPostsIdStyle['imgDiv']}> <img src={process.env.PUBLIC_URL + "/images/exampleImg.png"} alt="example" /> </div>
                        <div className={buyingPostsIdStyle['sellInformationContainer']}>
                            <div>
                                <div className={buyingPostsIdStyle['titleDiv']}>
                                    <p>{data.title}</p>
                                    <div className={buyingPostsIdStyle['moneyDiv']}> <p>{price}</p> <p>원</p> </div>
                                </div>
                                <hr />
                                <BuyingPostIdInfo data={data}/>
                            </div>
                            <div className={buyingPostsIdStyle['buttonDiv']}>
                                <button style={{cursor: 'pointer'}}>채팅하기</button>
                                <button style={{cursor: 'pointer'}}>찜하기</button>
                            </div>
                        </div>
                    </div>
                    <div className={buyingPostsIdStyle['hrDiv']}> <hr /> </div>
                    <div className={buyingPostsIdStyle['contextContainer']}>
                        <p>상품 정보</p> 
                        <div className={buyingPostsIdStyle['informationDiv']}>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className={buyingPostsIdStyle['hrDiv']}> <hr /> </div>
                    <div className={buyingPostsIdStyle['contextContainer']}>
                        <p>판매자 정보</p> 
                        <div className={buyingPostsIdStyle['userContainer']}>
                            <div className={buyingPostsIdStyle['userDiv']}>
                                {data.user && (
                                    <BuyingPostIdProducerInfo user={data.user}/>
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