import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlySeenSellItem.module.css';

import { viewCountContext } from '../selling-posts/ViewCountProvider';
import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function RecentlySeenSellItem({ post, viewData }) {
    const navigate = useNavigate();
    const { saveSellingViewCount } = useContext(viewCountContext);

    const countMatchingIds = () => {
        if (!viewData || !post) return 0;
        const matchingPostId = viewData.filter(data => data.post.id === post.id);
        return matchingPostId.length;
    };

    const containerStyle = {
        backgroundColor: post.krStatus === '판매완료' ? '#F6F6F6' : ''
    }
    const textStyle = {
        color: post.krStatus === '판매완료' ? '#D2D2D2' : ''
    }
    const imgStyle = {
        backgroundColor: post.krStatus === '판매완료' ? '#ABABAB' : '',
        opacity: post.krStatus === '판매완료' ? '0.5' : ''
    }

    const MoveLink = () => {
        navigate(`/buying-posts/${post.id}`);
        saveSellingViewCount(countMatchingIds());
    }
    
    let price = post.price && post.price.toLocaleString();
    return (
        <>
            <div className={styles["boxContainer"]} style={containerStyle} onClick={MoveLink}>
                <div className={styles["lookImgStyle"]}>
                    <div className={styles['imgDiv']}>
                        {
                        post.images && post.images.length > 0 ?
                            <img src={`${process.env.REACT_APP_IMAGEURL}/${post.images[0].uploadedFilename}`} alt="image" style={imgStyle} />
                            :
                            <img src="/images/notImage.png" />
                        }
                    </div>
                </div>

                <div className={styles['contextContainer']}>
                    <div className={styles["textContainer"]}>
                        <p style={textStyle}># {post.krStatus}</p>
                        <p>{post.title}</p>
                        <p style={{ top: "5%" }}>{price}원</p>
                    </div>

                    <div className={styles["vectorDiv"]}>
                        {/* 몇명 봤는지, 누가 찜했는지 */}
                        <div className={styles["eyesVectorDiv"]}>
                            <VscEye className={styles["eyesVector"]} />
                            <p>{countMatchingIds()}</p>
                        </div>
                            <div className={styles["heartVectorDiv"]}>
                            <GoHeart className={styles["heartVector"]} />
                            <p>{post.wishCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecentlySeenSellItem;