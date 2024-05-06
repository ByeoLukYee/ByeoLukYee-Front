import '../../styles/common/Styles.css';
import styles from "../../styles/home/Home.module.css";

import RecentlySeenSell from "./RecentlySeenSell";
import RecentlySell from "./RecentlySell";
import RecentlyBuy from "./RecentlyBuy";

function Home() {
  return (
    <div className={styles['container']}>

      <div className={styles['imgContainer']}>
        <div className={styles['imgDiv']}> <img src='/images/home/homeImg1.png' /> </div>
        <div className={styles['imgDiv']}> <img src='/images/home/homeImg2.png' /> </div>
        <div className={styles['imgDiv']}> <img src='/images/home/homeImg3.png' /> </div>
      </div>

      <div className={styles['recentlySeenSellDiv']}>
        <RecentlySeenSell />
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
