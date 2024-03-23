import sellStyle from '../../styles/common/sellDiv.module.css'

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function sellDiv() {
    return(
        <div className={sellStyle['newBoxContainer']}>
            <div className={sellStyle['newLookImgStyle']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'}/> </div>
            <div className={sellStyle['newTextContainer']}>
                <p>#판매중</p>
                <p>제목입니다.</p>
                <p style={{top: "5%"}}>40,000원</p>

                <div className={sellStyle['newVectorDiv']}>
                    {/* 몇명 봤는지, 누가 찜했는지 */}
                    <div className={sellStyle['newEyesVectorDiv']}>
                        <VscEye className={sellStyle['newEyesVector']}/>
                        <p>0</p>
                    </div>
                    <div className={sellStyle['newHeartVectorDiv']}>
                        <GoHeart className={sellStyle['newHeartVector']}/>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sellDiv;