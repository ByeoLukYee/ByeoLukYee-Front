import { Link } from "react-router-dom";

import styles from "../../styles/common/styles.css";
import sellStyle from "../../styles/selling-Item/sell-post-item.module.css";

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function SellPostItem({ status, price, title }) {
  return (
    <>
      <Link to="/buying-posts" style={{textDecoration: "none", color: "black"}}>
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

export default SellPostItem;
