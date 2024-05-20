import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileWriteManagement.module.css';

import ProfileSellingPostItemList from '../../components/profile/ProfileSellingPostItemList';
import ProfileBuyPostItemList from '../../components/profile/ProfileBuyPostItemList';
import ProfileCommentList from '../../components/profile/ProfileCommentList';

function PostWriteManagement({ sellingPostData, buyingPostData, commentData }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['sellContainer']}>
                    <p>내가 쓴 팝니다 글</p>

                    <div className={styles['itemList']}>
                        <ProfileSellingPostItemList sellingPostData={sellingPostData} />
                    </div>
                </div>

                <div className={styles['buyContainer']}>
                    <p>내가 쓴 삽니다 글</p>

                    <div className={styles['itemList']}>
                        <ProfileBuyPostItemList buyingPostData={buyingPostData} />
                    </div>
                </div>

                <div className={styles['commentContainer']}>
                    <p>내가 올린 경매댓글</p>

                    <div className={styles['itemList']}>
                        <ProfileCommentList commentData={commentData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostWriteManagement;