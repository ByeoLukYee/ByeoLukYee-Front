import styles from "../../styles/common/styles.css";
import homeStyle from "../../styles/home/home.module.css";

import TitleBar from "../common/titleBar";
import SearchInput from "../common/searchInput";
import SellDiv from "../selling-Item/sellPostItem";
import LookDiv from "../home/lookDiv";
import TextComponent from "../home/text";

import axios from "axios";
import { useEffect, useState } from "react";
import { HOST } from "../../config/config";

function Home() {
  const [sellingPostList, setsellingPostList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${HOST}/selling-posts`);
      console.log(response.data);
      setsellingPostList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={homeStyle["divContainer"]}>
      <TitleBar />
      <div className={homeStyle["DivStyle"]}>
        <p>벼룩이</p>
      </div>
      <SearchInput />
      <div className={homeStyle["lookContainer"]}>
        <TextComponent />
        <div className={homeStyle["scrollContainer"]}>
          <LookDiv />
        </div>

        <div className={homeStyle["newContainer"]}>
          <p className={homeStyle["lookUserP"]}>따끈따끈 최신 글</p>
          <div className={homeStyle["newScrollContainer"]}>
            {sellingPostList.map((item) => (
              <SellDiv
                title={item.title}
                status={item.krStatus}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
