import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';

import buyStyle from '../../styles/buying-Item/BuyPostItem.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";
 
function BuyPostItem({ title, description, price, status, id }) {
    // home 화면 최신 글 데이터 정보 화면에 보여주기
    return(
        <>
            <Link to={`/selling-posts/${id}`} style={{ textDecoration: "none", color: 'black' }}>
                <div className={buyStyle['BoxContainer']}>
                    <div className={buyStyle['firstDiv']}>
                        <div className={buyStyle['contextDiv']}>
                            <p>{title}</p>
                            <p>{description}</p>
                        </div>
                        <div className={buyStyle['moneyDiv']}>
                            <p>{price}원</p>
                            <p>희망 구매 가격</p>
                        </div>
                    </div>
                    <div className={buyStyle['secondDiv']}>
                        <p>#{status}</p>
                        <div className={buyStyle['iconDiv']}>
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
                </div>
            </Link>
        </>
    )
}

export default BuyPostItem;