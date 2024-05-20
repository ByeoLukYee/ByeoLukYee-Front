import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileCommentList.module.css';

import ProfileCommentItem from './ProfileCommentItem';

function ProfileCommentList({ commentData }) {
    return (
        <>
            <div className={styles['comment-container']}>
                {
                    commentData.length > 0 && commentData.map((item, index) => {
                        return (
                            <div className={styles['comment-item']} key={index}>
                                <ProfileCommentItem commentData={item} />
                            </div>
                        )
                    })
                }
            </div>

            {commentData.length <= 0 &&
                <p>경매 댓글 없습니다.</p>
            }
        </>
    )
}

export default ProfileCommentList;