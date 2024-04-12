import '../../styles/common/Styles.css';
import styles from '../../styles/profile/SellingSave.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList.js';

function SellingSave() {
    return (
        <>
            <div className={styles['container']}>
                <p>내가 찜한 팝니다 글</p>

                <div className={styles['itemList']}>
                    <SellingPostItemList />
                </div>
            </div>
        </>
    )
}

export default SellingSave;