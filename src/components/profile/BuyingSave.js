import '../../styles/common/Styles.css';
import styles from '../../styles/profile/BuyingSave.module.css';

import BuyPostItemList from '../buying-Item/BuyPostItemList.js';

function BuyingSave() {
    return (
        <>
            <div className={styles['container']}>
                <p>내가 찜한 삽니다 글</p>

                <div className={styles['itemList']}>
                    <BuyPostItemList />
                </div>
            </div>
        </>
    )
}

export default BuyingSave;