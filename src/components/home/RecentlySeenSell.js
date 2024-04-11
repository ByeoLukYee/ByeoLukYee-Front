import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlySeenSell.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList';

function RecentlySeenSell() {
    return (
        <>
            <div className={styles['sellTextDiv']}> <p>최근 본 팝니다</p> </div>
            <div className={styles['sellContainer']}> -0
                <SellingPostItemList /> 
            </div>

            <div className={styles['sellMoreDiv']}>
                <p>더보기</p>
            </div>
        </>
    )
}

export default RecentlySeenSell;