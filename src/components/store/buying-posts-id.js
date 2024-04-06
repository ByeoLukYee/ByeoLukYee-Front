import React, { useState } from 'react';

import styles from '../../styles/common/styles.css';
import buyingPostsIdStyle from '../../styles/store/buying-posts-id.module.css';

import Header from '../common/header';
import Footer from '../common/footer';

function BuyingPostsId({ status, price, title }) {
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
                                    <p>{title}</p>
                                    <div className={buyingPostsIdStyle['moneyDiv']}> <p>{price}</p> <p>원</p> </div>
                                </div>
                                <hr />
                                <div className={buyingPostsIdStyle['middleDiv']}>
                                    <p># {status}</p>
                                    <div className={buyingPostsIdStyle['checkDiv']}>
                                        <div style={{display: 'flex', columnGap: '5px'}}> <p>좋아요</p> <p>0</p> </div>
                                        <div style={{display: 'flex', columnGap: '5px'}}> <p>조회</p> <p>0</p> </div>
                                    </div>
                                    <div className={buyingPostsIdStyle['placeDiv']}> <p>희망 거래 장소</p> <p>신림역 3번 출구</p> </div> 
                                </div>
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
                            <p>상품 정보 적는 부분</p>
                        </div>
                    </div>
                    <div className={buyingPostsIdStyle['hrDiv']}> <hr /> </div>
                    <div className={buyingPostsIdStyle['contextContainer']}>
                        <p>판매자 정보</p> 
                        <div className={buyingPostsIdStyle['userContainer']}>
                            <div className={buyingPostsIdStyle['userDiv']}>
                                <div className={buyingPostsIdStyle['userImg']}> <img src={process.env.PUBLIC_URL + "/images/exampleImg.png"} alt="example" /> </div>
                                <div className={buyingPostsIdStyle['profileDiv']}>
                                    <p>최보람</p>
                                    <div className={buyingPostsIdStyle['myInformation']}>
                                        <p>3학년 4반 13번</p>
                                        <div style={{display: 'flex', columnGap: '15px'}}>
                                            <div style={{display: 'flex', columnGap: '5px'}}> <p>팝니다</p> <p>6</p> </div> 
                                            <div style={{display: 'flex', columnGap: '5px'}}> <p>삽니다</p> <p>2</p> </div>
                                        </div>
                                    </div>
                                </div>
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