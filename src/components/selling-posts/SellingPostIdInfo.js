import React, { useContext } from 'react';
import { viewCountContext } from './ViewCountProvider';
import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostIdInfo.module.css';

function SellingPostIdInfo({ data }) {
    const { buyingViewCount } = useContext(viewCountContext);

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['textContainer']}>
                    <p>#{data.krStatus}</p>
                    <div className={styles['GoodSee']}>
                        <p>조회 {buyingViewCount+1}</p>
                    </div>                    
                    <div className={styles['place']}>
                        <p>희망 거래 장소</p>
                        <p>{data.location}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingPostIdInfo;