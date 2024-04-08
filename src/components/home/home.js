import styles from "../../styles/common/styles.css";
import homeStyle from "../../styles/home/home.module.css";

import SellingPostItemList from '../selling-Item/sellingPostItemList'
import BuyPostItemList from "../buying-Item/buyPostItemList";

function Home() {

  return (
    <div style={{width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', left: '15vw', marginBottom: '10%', zIndex: 100, overflowX: 'hidden'}}>

        <div style={{width: '85%', height: '45vh', display: 'flex', columnGap: '30px', marginBottom: '6%'}}>
          <div className={homeStyle['grayContainer']}></div>
          <div className={homeStyle['grayContainer']}></div>
          <div className={homeStyle['grayContainer']}></div>
        </div>

        <div className={homeStyle['recentlySeenSellDiv']}>
          <div className={homeStyle['sellTextDiv']}> <p>최근 본 팝니다</p> </div>
          <div className={homeStyle['sellContainer']}> 
            <SellingPostItemList /> 
          </div>

          <div className={homeStyle['sellMoreDiv']}>
            <p>더보기</p>
          </div>
        </div>

        <div className={homeStyle['recentlySellDiv']}>
          <div className={homeStyle['sellTextDiv']}> <p>따끈따근 최신 팝니다 글</p> </div>
          <div className={homeStyle['sellContainer']}>
            <SellingPostItemList /> 
          </div>

          <div className={homeStyle['sellMoreDiv']}>
            <p>더보기</p>
          </div>
        </div>

        <div className={homeStyle['recentlyBuyDiv']}>
          <div className={homeStyle['buyTextDiv']}> <p>따끈따근 최신 삽니다 글</p> </div>
          <div className={homeStyle['buyContainer']}>
            <BuyPostItemList />
          </div>

          <div className={homeStyle['buyMoreDiv']}>
            <p>더보기</p>
          </div>
        </div>
      </div>
  );
}

export default Home;
