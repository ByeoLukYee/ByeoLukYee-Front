import { Link } from 'react-router-dom';
import styles from '../../styles/common/styles.css';
import buyStyle from '../../styles/store/buyDetailYou.module.css';

import AuctionDiv from './auctionDiv';
import AuctionParticipation from './auctionParticipation';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";
import BuyDetail from './buyDetail';

function BuyDetailYou() {
    return(
        <>
            <div className={buyStyle['topContainer']}>
                <BuyDetail />

                <div className={buyStyle['bottomContainer']}>
                    <div className={buyStyle['auctionDiv']}>
                        <AuctionDiv />
                    </div>
                    
                    <div className={buyStyle['buttonContainer']}>
                        <Link to="/auctionParticipation"> <button className={buyStyle['buttonStyle']}>경매 참여하기</button> </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuyDetailYou;