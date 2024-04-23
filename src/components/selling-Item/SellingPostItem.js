import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';
import sellStyle from "../../styles/selling-Item/SellingPostItem.module.css";

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function SellingPostItem({ status, price, title }) {
  // SellingPostItemList.js에서 전달 받은 status, price, title를 화면에 보여주기
  return (
    <>
      <Link to="/buying-posts/1" style={{textDecoration: "none", color: "black"}}>
        <div className={sellStyle["boxContainer"]}>

          <div className={sellStyle["lookImgStyle"]}>
            <img
              src={process.env.PUBLIC_URL + "/images/exampleImg.png"}
              alt="example"
            />
          </div>

          <div className={sellStyle['contextContainer']}>
            <div className={sellStyle["textContainer"]}>
              <p># {status}</p>
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