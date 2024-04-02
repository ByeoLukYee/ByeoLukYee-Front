import { useState, useEffect } from "react";
import styles from "../../styles/common/styles.css";
import buyStyle from "../../styles/store/buyDetail.module.css";
import axios from "axios";
import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";
import { HOST } from "../../config/config";

function BuyDetail() {
  const [buyingPost, setBuyingPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${HOST}/buying-posts/1`);
      console.log(response.data);
      setBuyingPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={buyStyle["top"]}>
        <div className={buyStyle["hashTag"]}>
          <p>#{buyingPost ? buyingPost.krStatus : "로딩중"}</p>
        </div>
        <div className={buyStyle["title"]}>
          <p>#{buyingPost ? buyingPost.title : "로딩중"}</p>
        </div>
        <div className={buyStyle["day"]}>
          <div className={buyStyle["p"]}>
            <p>{buyingPost ? buyingPost.createdAt.split("T")[0] : "로딩중"}</p>
          </div>
          <div className={buyStyle["vectorDiv"]}>
            <div className={buyStyle["eyesVectorDiv"]}>
              <VscEye className={buyStyle["eyesVector"]} />
              <p>0</p>
            </div>
            <div className={buyStyle["heartVectorDiv"]}>
              <GoHeart className={buyStyle["heartVector"]} />
              <p>0</p>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div></div>

      <div></div>
    </>
  );
}

export default BuyDetail;
