import { Link } from "react-router-dom";

import styles from '../../styles/common/styles.css';

import buyingStyle from '../../styles/buying-Item/buying-post-item.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function BuyingPostItem() {
    return(
        <>
            <Link to="/selling-posts" style={{ textDecoration: "none", color: 'black' }}>
                
                <div className={buyingStyle['BoxContainer']}>
                    
                    <div className={buyingStyle['topDiv']}>
                        <div className={buyingStyle['topLeftDiv']}>
                            <div className={buyingStyle['imgDiv']}> <img src={process.env.PUBLIC_URL + "/images/exampleImg.png"} alt="example" /> </div>
                            <div style={{display: 'flex', flexDirection: 'column', rowGap: '5px'}}>
                                <p>최보람</p>
                                <p>2024-04-04</p>
                            </div>
                        </div>
                        <p>#경매중</p>
                    </div>

                    <div className={buyingStyle['middleDiv']}>
                        <div className={buyingStyle['context']}>
                            <p>아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요아이폰 7 삽니다..ㅜㅜ 아이폰 가지고 싶어요</p>
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                        <div className={buyingStyle['moneyDiv']}>
                            <p>희망 구매 가격</p>
                            <p>100,000원</p>
                        </div>
                        <div className={buyingStyle['iconDiv']}>
                            <div className={buyingStyle['eyesVectorDiv']}>
                                <VscEye className={buyingStyle['eyesVector']}/>
                                <p>0</p>
                            </div>
                            <div className={buyingStyle['heartVectorDiv']}>
                                <GoHeart className={buyingStyle['heartVector']}/>
                                <p>0</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default BuyingPostItem;