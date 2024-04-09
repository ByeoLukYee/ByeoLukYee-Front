import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentList.module.css';

import CommentItem from './CommentItem';

function CommentList() {
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

export default CommentList;