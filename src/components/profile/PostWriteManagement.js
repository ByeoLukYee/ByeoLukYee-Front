import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileWriteManagement.module.css';

import SellingPostItemList from '../../components/selling-Item/SellingPostItemList';
import BuyPostItemList from '../../components/buying-Item/BuyPostItemList';

function PostWriteManagement() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['sellContainer']}>
                    <p>내가 쓴 팝니다 글</p>

                    <div className={styles['itemList']}>
                        <SellingPostItemList />
                    </div>
                </div>

                <div className={styles['buyContainer']}>
                    <p>내가 쓴 삽니다 글</p>

                    <div className={styles['itemList']}>
                        <BuyPostItemList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostWriteManagement;