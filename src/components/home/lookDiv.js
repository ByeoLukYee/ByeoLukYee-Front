import styles from '../../styles/common/styles.css';
import lookStyle from '../../styles/home/home.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function LookDiv() {
    return(
        <div className={lookStyle['topContainer']}>
            <div className={lookStyle['boxContainer']}>
                <div className={lookStyle['lookImgStyle']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'}/> </div>
                <div className={lookStyle['textContainer']}>
                    <p>#판매중</p>
                    <p>제목입니다.</p>
                </div>
                <p className={lookStyle['moneyP']}>40,000원</p>
                <div className={lookStyle['vectorDiv']}>
                    {/* 몇명 봤는지, 누가 찜했는지 */}
                    <div className={lookStyle['eyesVectorDiv']}>
                        <VscEye className={lookStyle['eyesVector']}/>
                        <p>0</p>
                    </div>
                    <div className={lookStyle['heartVectorDiv']}>
                        <GoHeart className={lookStyle['heartVector']}/>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookDiv;