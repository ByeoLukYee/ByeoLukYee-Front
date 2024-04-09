import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';
import styles from "../../styles/selling-Item/Selling-posts-item.module.css";

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";

function SellingPostItem({ status, price, title }) {
  return (
    <>
      <Link to="/buying-posts/1" style={{textDecoration: "none", color: "black"}}>
        <div className={styles["boxContainer"]}>

          <div className={styles["lookImgStyle"]}>
            <img
              src={process.env.PUBLIC_URL + "/images/exampleImg.png"}
              alt="example"
            />
          </div>

          <div className={styles['contextContainer']}>
            <div className={styles["textContainer"]}>
              <p># {status}</p>
              <p>{title}</p>
              <p style={{ top: "5%" }}>{price}원</p>
            </div>

            <div className={styles["vectorDiv"]}>
              {/* 몇명 봤는지, 누가 찜했는지 */}
              <div className={styles["eyesVectorDiv"]}>
                <VscEye className={styles["eyesVector"]} />
                <p>0</p>
              </div>
              <div className={styles["heartVectorDiv"]}>
                <GoHeart className={styles["heartVector"]} />
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