import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileCommentList.module.css';

import CommentItem from '../comment/CommentItem';

function ProfileCommentList() {
    return (
        <>
            <div className={styles['comment-container']}>
                <div className={styles['comment-item']}>
                    <CommentItem />
                </div>
            </div>
        </>
    )
}

export default ProfileCommentList;