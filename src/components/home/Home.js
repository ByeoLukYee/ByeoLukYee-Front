import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from "../../styles/home/Home.module.css";

import RecentlySeenSell from "./RecentlySeenSell";
import RecentlySell from "./RecentlySell";
import RecentlyBuy from "./RecentlyBuy";

function Home() {
  const [sellingViewData, setSellingViewData] = useState([]);
  // const [buyingViewData, setBuyingViewData] = useState([]);

  async function sellingCheck() {
    try {
        const response = await axios.get(`${process.env.REACT_APP_HOST}/view-histories`, {
            params: {
                type: 'selling'
            }
        });
        if (response.status === 200) {
            console.log("팝니다 조회수 불러오기 성공");
            setSellingViewData(response.data);
        } else {
            console.log("팝니다 조회수 불러오기 실패", response.status);
        }
    } catch(error) {
        console.error("서버 연결 실패", error);
    }
  }

  // async function buyingCheck() {
  //   try {
  //       const response = await axios.get(`${process.env.REACT_APP_HOST}/view-histories`, {
  //           params: {
  //               type: 'buying'
  //           }
  //       });
  //       if (response.status === 200) {
  //           console.log("삽니다 조회수 불러오기 성공");
  //           setBuyingViewData(response.data);
  //       } else {
  //           console.log("삽니다 조회수 불러오기 실패", response.status);
  //       }
  //   } catch(error) {
  //       console.error("서버 연결 실패", error);
  //   }
  // }

  useEffect(() => {
    sellingCheck();
    // buyingCheck();
  }, []);

  return (
    <div className={styles['container']}>

      <div className={styles['imgContainer']}>
        <div className={styles['imgDiv']}> <img src='/images/home/homeImg1.png' /> </div>
        <div className={styles['imgDiv']}> <img src='/images/home/homeImg2.png' /> </div>
        <div className={styles['imgDiv']}> <img src='/images/home/homeImg3.png' /> </div>
      </div>

      <div className={styles['recentlySeenSellDiv']}>
        <RecentlySeenSell viewData={sellingViewData} />
      </div>

      <div className={styles['recentlySellDiv']}>
        <RecentlySell />
      </div>

      <div className={styles['recentlyBuyDiv']}>
        <RecentlyBuy />
      </div>

    </div>
  );
}

export default Home;
