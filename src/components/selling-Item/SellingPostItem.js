import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';
import sellStyle from "../../styles/selling-Item/SellingPostItem.module.css";

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function SellingPostItem({ status, price, title, id, images }) {
  // SellingPostItemList.js에서 전달 받은 status, price, title를 화면에 보여주기
  const containerStyle = {
    backgroundColor: status === '판매완료' ? '#F6F6F6' : ''
  }
  const textStyle = {
    color: status === '판매완료' ? '#D2D2D2' : ''
  }
  const imgStyle = {
    backgroundColor: status === '판매완료' ? '#ABABAB' : '',
    opacity: status === '판매완료' ? '0.5' : ''
  }

  return (
    <>
      <Link to={`/buying-posts/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <div className={sellStyle["boxContainer"]} style={containerStyle}>

          <div className={sellStyle["lookImgStyle"]}>
            <div className={sellStyle['imgDiv']}>
              {
                images.length > 0 ?
                  <img src={`${process.env.REACT_APP_IMAGEURL}/${images[0].uploadedFilename}`} alt="image" style={imgStyle} />
                  :
                  <img src="/images/notImage.png" />
              }
            </div>
          </div>

          <div className={sellStyle['contextContainer']}>
            <div className={sellStyle["textContainer"]}>
              <p style={textStyle}># {status}</p>
              <p>{title}</p>
              <p style={{ top: "5%" }}>{price}원</p>
            </div>

            <div className={sellStyle["vectorDiv"]}>
              {/* 몇명 봤는지, 누가 찜했는지 */}
              <div className={sellStyle["eyesVectorDiv"]}>
                <VscEye className={sellStyle["eyesVector"]} />
                <p>0</p>
              </div>
              <div className={sellStyle["heartVectorDiv"]}>
                <GoHeart className={sellStyle["heartVector"]} />
                <p>0</p>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </>
  );
}

export default SellingPostItem;