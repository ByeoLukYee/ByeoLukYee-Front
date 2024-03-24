import styles from '../../styles/common/styles.css';
import sellStyle from '../../styles/store/sellDetail.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function sellDetail() {
    return(
        <>
            <div className={sellStyle['imageDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} alt='example' /> </div>
            <div>
                {/* titleDiv */}
                <div className={sellStyle['titleDiv']}>
                    <div className={sellStyle['information']}>
                        <p>#판매중</p>
                        <div className={sellStyle['p']}>
                            <p>2024</p><p>/</p><p>03</p><p>/</p><p>24</p>
                        </div>
                    </div>
                    <div className={sellStyle['title']}>
                        <p>해피해킹 하이브리드 모델 (1년 사용)</p>
                    </div>
                    <div className={sellStyle['vectorDiv']}>
                        <div className={sellStyle['eyesVectorDiv']}>
                            <VscEye className={sellStyle['eyesVector']}/>
                            <p>0</p>
                        </div>
                        <div className={sellStyle['heartVectorDiv']}>
                            <GoHeart className={sellStyle['heartVector']}/>
                            <p>0</p>
                        </div>
                    </div>
                    <hr />
                </div>

                {/* contextDiv */}
                <div className={sellStyle['anyDiv']}>
                    <div className={sellStyle['topDiv']}>
                        <div className={sellStyle['contextDiv']}>
                            <p>가격</p>
                            <p>거래 장소</p>
                        </div>
                        <div className={sellStyle['contextDiv']}>
                            <p>100,000원</p>
                            <p>신림역 또는 학교</p>
                        </div>
                    </div>

                    <div className={sellStyle['contextDetail']}>
                        <p>해피해킹키보드 입니다 좋습니다. 맥 유저이고 1년동안 썼는데 다른 키보드 쓰려고 팝니다. 소중하게 다뤘습니다 ㄹㅇ 많이 구매해주세요 여러분~ 담배 안 펴서 담배 냄새 안 아요 물 흘린적 없고 정상작동 합니다. 해피해킹키보드 입니다 좋습니다. 맥 유저이고 1년동안 썼는데 다른 키보드 쓰려고 팝니다. 소중하게 다뤘습니다 ㄹㅇ 많이 구매해주세요 여러분~ 담배 안 펴서 담배 냄새 안 아요 물 흘린적 없고 정상작동 합니다.</p>
                    </div>

                    <div className={sellStyle['buttonDiv']}>
                        <button className={sellStyle['buttonStyles']}>거래하기</button>
                        <button className={sellStyle['btnHeart']}> <GoHeart /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sellDetail;