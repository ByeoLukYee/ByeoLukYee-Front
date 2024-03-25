import styles from '../../styles/common/styles.css';
import buyStyle from '../../styles/store/buyDetail.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function buyDetail() {
    return(
        <>
            <div className={buyStyle['top']}>
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
                <hr />
            </div>

            <div></div>

            <div></div>
        </>
    )
}

export default buyDetail;