import React from "react";
import { useNavigate } from "react-router-dom";

import '../../styles/common/Styles.css';

import buyStyle from '../../styles/buying-Item/BuyPostItem.module.css';

import { VscEye } from "react-icons/vsc";
 
function BuyPostItem({ post }) {
    const navigate = useNavigate();

    const containerStyle = {
        backgroundColor: post.krStatus === '경매완료' ? '#F6F6F6' : ''
    }
    const textStyle = {
        color: post.krStatus === '경매완료' ? '#D2D2D2' : ''
    }

    const movePage = () => {
        navigate(`/selling-posts/${post.id}`);
    }

    let price = post.price && post.price.toLocaleString()
    return(
        <>
            <div className={buyStyle['BoxContainer']} style={containerStyle} onClick={movePage}>
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
                            <p>{post.views}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyPostItem;