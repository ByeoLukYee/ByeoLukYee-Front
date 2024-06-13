import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import '../../styles/common/Styles.css';
import sellStyle from "../../styles/selling-Item/SellingPostItem.module.css";

import { viewCountContext } from '../selling-posts/ViewCountProvider';
import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function SellingPostItem({ post }) {
  const navigate = useNavigate();
  const { saveSellingViewCount } = useContext(viewCountContext);

  // SellingPostItemList.js에서 전달 받은 status, price, title를 화면에 보여주기
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

  const selectPost = () => {
    navigate(`/buying-posts/${post.id}`);
    saveSellingViewCount(post.views);
  }

  let price = post.price && post.price.toLocaleString();
  return (
    <>
      <div className={sellStyle["boxContainer"]} style={containerStyle} onClick={selectPost}>
        <div className={sellStyle["lookImgStyle"]}>
          <div className={sellStyle['imgDiv']}>
            {
              post.images && post.images.length > 0 ?
                <img src={`${process.env.REACT_APP_IMAGEURL}/${post.images[0].uploadedFilename}`} alt="image" style={imgStyle} />
                :
                <img src="/images/notImage.png" />
            }
          </div>
        </div>

        <div className={sellStyle['contextContainer']}>
          <div className={sellStyle["textContainer"]}>
            <p style={textStyle}># {post.krStatus}</p>
            <p>{post.title}</p>
            <p style={{ top: "5%" }}>{price}원</p>
          </div>

          <div className={sellStyle["vectorDiv"]}>
            {/* 몇명 봤는지, 누가 찜했는지 */}
            <div className={sellStyle["eyesVectorDiv"]}>
              <VscEye className={sellStyle["eyesVector"]} />
              <p>{post.views}</p>
            </div>
            <div className={sellStyle["heartVectorDiv"]}>
              <GoHeart className={sellStyle["heartVector"]} />
              <p>{post.wishCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellingPostItem;