import styles from '../../styles/common/styles.css';
import buyStyle from '../../styles/store/buyDetailYou.module.css';

import AuctionDiv from './auctionDiv';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function BuyDetailYou() {
    return(
        <>
            <div className={buyStyle['topContainer']}>
                <div className={buyStyle['topDiv']}>
                    <div className={buyStyle['hashTag']}>
                        <p>#경매중</p>
                    </div>
                    <div className={buyStyle['title']}>
                        <p>로지텍 버티컬 마우스 삽니다 ㅠㅠ</p>
                    </div>
                    <div className={buyStyle['day']}>
                        <div className={buyStyle['p']}>
                            <p>2024</p><p>/</p><p>03</p><p>/</p><p>24</p>
                        </div>
                        <div className={buyStyle['vectorDiv']}>
                            <div className={buyStyle['eyesVectorDiv']}>
                                <VscEye className={buyStyle['eyesVector']}/>
                                <p>0</p>
                            </div>
                            <div className={buyStyle['heartVectorDiv']}>
                                <GoHeart className={buyStyle['heartVector']}/>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                    <hr className={buyStyle['hr']}/>

                    <div className={buyStyle['contextContainer']}>
                        <p>해피해킹키보드 입니다 좋습니다. 맥 유저이고 1년동안 썼는데 다른 키보드 쓰려고 팝니다. 소중하게 다뤘습니다 ㄹㅇ 많이 구매해주세요 여러분~ 담배 안 펴서 담배 냄새 안 아요 물 흘린적 없고 정상작동 합니다. 해피해킹키보드 입니다 좋습니다.</p>
                    </div>

                    <div className={buyStyle['informationDiv']}>
                        <div className={buyStyle['hopeDiv']}>
                            <p>희망 구매가</p>
                            <p>희망 거래장소</p>
                        </div>
                        <div className={buyStyle['answerDiv']}>
                            <p>40,000</p>
                            <p>신림역 또는 학교</p>
                        </div>
                    </div>
                </div>
                

                <div className={buyStyle['bottomContainer']}>
                    <div className={buyStyle['auctionDiv']}>
                        <AuctionDiv />
                    </div>
                    
                    <div className={buyStyle['buttonContainer']}>
                        <button className={buyStyle['buttonStyle']}>경매 참여하기</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuyDetailYou;