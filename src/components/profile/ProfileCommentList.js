import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileCommentList.module.css';

import ProfileCommentItem from './ProfileCommentItem';

function ProfileCommentList({ commentData }) {
    return (
        <>
            <div className={styles['comment-container']}>
                {Array.isArray(commentData) && commentData.length > 0 ? (
                    commentData.length > 0 && commentData.map((item, index) => {
                        return (
                            <div className={styles['comment-item']} key={index}>
                                <ProfileCommentItem commentData={item} />
                            </div>
                        )
                    })
                ) : (
                    <p>경매댓글 없습니다.</p>
                )}
            </div>
        </>
    )
}

export default ProfileCommentList;