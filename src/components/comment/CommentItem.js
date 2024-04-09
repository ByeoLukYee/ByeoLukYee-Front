import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentItem.module.css';

function CommentItem() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['top']}>
                    <p>title</p>
                    <div className={styles['info']}>
                        <p>price 원</p>
                        <p>place</p>
                    </div>
                </div>
                <div  className={styles['hr']}> <hr /> </div>
                <div className={styles['bottom']}>
                    <p>content</p>
                </div>
            </div>
        </>
    )
}

export default CommentItem;