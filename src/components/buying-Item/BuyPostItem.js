import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';

import buyStyle from '../../styles/buying-Item/BuyPostItem.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";
 
function BuyPostItem({ post }) {
    // home 화면 최신 글 데이터 정보 화면에 보여주기
    const containerStyle = {
        backgroundColor: post.krStatus === '경매완료' ? '#F6F6F6' : ''
    }
    const textStyle = {
        color: post.krStatus === '경매완료' ? '#D2D2D2' : ''
    }

    let price = post.price && post.price.toLocaleString()
    return(
        <>
            <Link to={`/selling-posts/${post.id}`} style={{ textDecoration: "none", color: 'black' }}>
                <div className={buyStyle['BoxContainer']} style={containerStyle}>
                    <div className={buyStyle['firstDiv']}>
                        <div className={buyStyle['contextDiv']}>
                            <p>{post.title}</p>
                            <p>{post.description}</p>
                        </div>
                        <div className={buyStyle['moneyDiv']}>
                            <p>{price}원</p>
                            <p>희망 구매 가격</p>
                        </div>
                    </div>
                    <div className={buyStyle['secondDiv']}>
                        <p style={textStyle}>#{post.krStatus}</p>
                        <div className={buyStyle['iconDiv']}>
                            <div className={buyStyle['eyesVectorDiv']}>
                                <VscEye className={buyStyle['eyesVector']}/>
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