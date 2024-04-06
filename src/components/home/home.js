import styles from "../../styles/common/styles.css";
import homeStyle from "../../styles/home/home.module.css";

import HeaderWithInnderNav from "../common/header-with-innder-nav";
import Footer from "../common/footer";
import SellingItemList from '../selling-Item/sellingItemList'
import BuyingItemList from "../buying-Item/buyingItemList";

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
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', left: '15vw', marginTop: '1.5%', marginRight: '15.5%', zIndex: 100}}>

        <div>{/* 피그마 : 회색 박스 */}</div>
        <div className={homeStyle['recentlySeenSellDiv']}>
          <div className={homeStyle['sellTextDiv']}> <p>최근 본 팝니다</p> </div>
          <div className={homeStyle['sellContainer']}>
            <SellingItemList />
          </div>

          <div className={homeStyle['sellMoreDiv']}>
            <p>더보기</p>
          </div>
        </div>

        <div className={homeStyle['recentlySellDiv']}>
          <div className={homeStyle['sellTextDiv']}> <p>따끈따근 최신 팝니다 글</p> </div>
          <div className={homeStyle['sellContainer']}>
            <SellingItemList />
          </div>

          <div className={homeStyle['sellMoreDiv']}>
            <p>더보기</p>
          </div>
        </div>

        <div className={homeStyle['recentlyBuyDiv']}>
          <div className={homeStyle['buyTextDiv']}> <p>따끈따근 최신 삽니다 글</p> </div>
          <div className={homeStyle['buyContainer']}>
            <BuyingItemList />
          </div>

          <div className={homeStyle['buyMoreDiv']}>
            <p>더보기</p>
          </div>
        </div>
      </div>
  );
}

export default Home;
