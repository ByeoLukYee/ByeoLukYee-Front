import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostId.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import SellingPostIdConsumerInfo from './SellingPostIdConsumerInfo';
import SellingPostIdInfo from './SellingPostIdInfo';
import SellingInput from  './SellingInput';
import CommentList from '../comment/CommentList';

function SellingPostId() {
    const [showBuyingInput, setShowBuyingInput] = useState(false);

    const handleBuyButtonClick = () => {
        setShowBuyingInput(prevState => !prevState);
    };
    
    // /selling-posts/{id}에서 GET하고
    // title, desc 보여주기
    // user/ name, studentId, 팝니다, 삽니다 올린 횟수 SellingPostIdConsumerInfo에 전달하기
    // krStatus, location, 좋아요, 조회 횟수 SellingPostIdInfo에 전달하기

    return (
        <div className={styles['container']}>
            <Header />
            
            <div className={styles['allContainer']}>
                <div className={styles['topContainer']}>
                    <div className={styles['container1']}>
                        <div className={styles['contextDiv']}>
                            <p>title</p>
                            <hr />
                            <p>context</p>
                        </div>
                        <div className={styles['priceDiv']}>
                            <p>희망 거래 가격</p>
                            <div className={styles['price']}> <p>price</p> <p>원 이하</p> </div>
                        </div>
                    </div>
                    <div className={styles['container2']}>
                        <div className={styles['profile']}>
                            <div className={styles['information']}>
                                <SellingPostIdConsumerInfo />
                                <SellingPostIdInfo />
                            </div>
                            <div className={styles['button']}> <button onClick={handleBuyButtonClick}>참여하기</button> </div>
                        </div>
                    </div>
                </div>
                <div className={styles['hr']}> <hr /> </div>
                <div className={styles['bottomContainer']}>
                    <p>경매댓글</p>
                    <div className={styles['commentContainer']}>
                        {showBuyingInput && <SellingInput />}
                        <CommentList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SellingPostId; 
