import React from 'react';

import '../../styles/common/Styles.css';
import buyingPostsIdStyle from '../../styles/buying-posts/BuyingPostId.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import BuyingPostIdProducerInfo from './BuyingPostIdProducerInfo';
import BuyingPostIdInfo from './BuyingPostIdInfo';

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
                                <BuyingPostIdInfo status={status}/>
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
                                <BuyingPostIdProducerInfo />
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