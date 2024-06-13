import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { viewCountContext } from "../selling-posts/ViewCountProvider";

import '../../styles/common/Styles.css';

import buyingStyle from '../../styles/buying-Item/BuyingPostItem.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function BuyingPostItem({ post }) {
    const navigate = useNavigate();
    const { saveBuyingViewCount } = useContext(viewCountContext);
    
    const containerStyle = {
        backgroundColor: post.krStatus === '경매완료' ? '#F6F6F6' : ''
    }
    const textStyle = {
        color: post.krStatus === '경매완료' ? '#D2D2D2' : ''
    }

    const ClickedItem = () => {
        navigate(`/selling-posts/${post.id}`);
        saveBuyingViewCount(post.views);
    }

    let price = post.price && post.price.toLocaleString()
    return(
        <>
            <div className={buyingStyle['BoxContainer']} style={containerStyle} onClick={ClickedItem}>    
                <div className={buyingStyle['topDiv']}>
                    <div className={buyingStyle['topLeftDiv']}>
                        <div className={buyingStyle['imgDiv']}>
                            {
                                post.user.profileUrl ? (
                                    <img src={post.user.profileUrl} alt="profileImage" />
                                ) : (
                                    <img src="/images/profileImage.png" alt="profileImage" />
                                )
                            }
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', rowGap: '5px'}}>
                            <p>{post.user.name}</p>
                            <p>{post.createdAt}</p>
                        </div>
                    </div>
                    <p style={textStyle}>#{post.krStatus}</p>
                </div>

                <div className={buyingStyle['middleDiv']}>
                    <div className={buyingStyle['context']}>
                        <p>{post.title}</p>
                        <p>{post.description}</p>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <div className={buyingStyle['moneyDiv']}>
                        <p>희망 구매 가격</p>
                        <p>{price}원</p>
                    </div>
                    <div className={buyingStyle['iconDiv']}>
                        <div className={buyingStyle['eyesVectorDiv']}>
                            <VscEye className={buyingStyle['eyesVector']}/>
                            <p>{post.views}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuyingPostItem;