import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileCommentItem.module.css';

function ProfileCommentItem({ commentData }) {
    const price = commentData.price >= 0 && commentData.price.toLocaleString() + ' 원';
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['top']}>
                    <p>{commentData.title}</p>
                    <div className={styles['info']}>
                        <p>{price}</p>
                        <p>{commentData.location}</p>
                    </div>
                </div>
                <div className={`${styles['hr']} ${styles['defalutHr']}`}> <hr /> </div>
                <div className={styles['bottom']}>
                    <p>{commentData.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileCommentItem;