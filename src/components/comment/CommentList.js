import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentList.module.css';

import CommentItem from './CommentItem';

function CommentList() {
    // /selling-comments에서 GET하기
    // title, price, location, desc CommentItem에 전달하기
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