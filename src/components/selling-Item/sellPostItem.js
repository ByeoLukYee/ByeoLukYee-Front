import { Link } from "react-router-dom";

import styles from "../../styles/common/styles.css";
import sellStyle from "../../styles/selling-Item/sellDiv.module.css";

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function SellDiv({ status, price, title }) {
  return (
    <>
      <Link to="/sellDetail" style={{ textDecoration: "none", color: "black" }}>
        <div className={sellStyle["newBoxContainer"]}>
          <div className={sellStyle["newLookImgStyle"]}>
            <img
              src={process.env.PUBLIC_URL + "/images/exampleImg.png"}
              alt="example"
            />
          </div>
          <div className={sellStyle["newTextContainer"]}>
            <p># {status}</p>
            <p>{title}</p>
            <p style={{ top: "5%" }}>{price}원</p>
            <div className={sellStyle["newVectorDiv"]}>
              {/* 몇명 봤는지, 누가 찜했는지 */}
              <div className={sellStyle["newEyesVectorDiv"]}>
                <VscEye className={sellStyle["newEyesVector"]} />
                <p>{price}</p>
              </div>
              <div className={sellStyle["newHeartVectorDiv"]}>
                <GoHeart className={sellStyle["newHeartVector"]} />
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SellDiv;
