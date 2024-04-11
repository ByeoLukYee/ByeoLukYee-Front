import "../../styles/common/styles.css";
import styles from "../../styles/home/home.module.css";

import RecentlySeenSell from "./RecentlySeen-sell";
import RecentlySell from "./Recently-sell";
import RecentlyBuy from "./Recently-buy";

function Home() {

  return (
    <div className={styles['container']}>

      <div className={styles['grayContainer']}>
        <div className={styles['grayDiv']}></div>
        <div className={styles['grayDiv']}></div>
        <div className={styles['grayDiv']}></div>
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
