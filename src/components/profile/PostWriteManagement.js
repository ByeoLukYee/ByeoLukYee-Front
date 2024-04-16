import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileWriteManagement.module.css';

import ProfileSellingPostItemList from '../../components/profile/ProfileSellingPostItemList';
import ProfileBuyPostItemList from '../../components/profile/ProfileBuyPostItemList';
import ProfileCommentList from '../../components/profile/ProfileCommentList';

function PostWriteManagement() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['sellContainer']}>
                    <p>내가 쓴 팝니다 글</p>

                    <div className={styles['itemList']}>
                        <ProfileSellingPostItemList />
                    </div>
                </div>

                <div className={styles['buyContainer']}>
                    <p>내가 쓴 삽니다 글</p>

                    <div className={styles['itemList']}>
                        <ProfileBuyPostItemList />
                    </div>
                </div>

                <div className={styles['commentContainer']}>
                    <p>내가 쓴 삽니다 글</p>

                    <div className={styles['itemList']}>
                        <ProfileCommentList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostWriteManagement;