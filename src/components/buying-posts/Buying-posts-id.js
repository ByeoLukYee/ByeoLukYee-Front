import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import buyingPostsIdStyle from '../../styles/buying-posts/Buying-posts-id.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import BuyingPostsIdImage from './Buying-posts-id-image';
import BuyingPostsIdInfo from './Buying-posts-id-info';
import BuyingPostsIdContent from './Buying-posts-id-content';
import BuyingPostsIdProducerInfo from './Buying-posts-id-producerInfo';

function BuyingPostsId() {
    return (
        <>
            <div className={buyingPostsIdStyle["container"]}>
                <Header />
                <div className={buyingPostsIdStyle['topContainer']}>
                    <div className={buyingPostsIdStyle['topDiv']}>
                        <BuyingPostsIdImage />
                        <div className={buyingPostsIdStyle['sellInformationContainer']}>
                            <div>
                                <div className={buyingPostsIdStyle['titleDiv']}>
                                    <p>title</p>
                                    <div className={buyingPostsIdStyle['moneyDiv']}> <p>price</p> <p>원</p> </div>
                                </div>
                                <hr />
                                <div className={buyingPostsIdStyle['middleDiv']}>
                                    <BuyingPostsIdInfo />
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
                            <BuyingPostsIdContent />
                        </div>
                    </div>
                    <div className={buyingPostsIdStyle['hrDiv']}> <hr /> </div>
                    <div className={buyingPostsIdStyle['contextContainer']}>
                        <p>판매자 정보</p> 
                        <div className={buyingPostsIdStyle['userContainer']}>
                            <BuyingPostsIdProducerInfo />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default BuyingPostsId;