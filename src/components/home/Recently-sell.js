import '../../styles/common/Styles.css';
import styles from '../../styles/home/Recently-sell.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList';

function RecentlySell() {
    return (
        <>
            <div className={styles['sellTextDiv']}> <p>따끈따근 최신 팝니다 글</p> </div>
            <div className={styles['sellContainer']}>
                <SellingPostItemList /> 
            </div>

            <div className={styles['sellMoreDiv']}>
                <p>더보기</p>
            </div>
        </>
    )
}

export default RecentlySell;