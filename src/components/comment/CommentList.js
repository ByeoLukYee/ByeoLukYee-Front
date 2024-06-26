import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentList.module.css';

import CommentItem from './CommentItem';

function CommentList({ data, setSelectedCommentIndex, selectedCommentIndex, disableSelection }) {
    const handleClick = (index) => {
        if (!disableSelection) {
            setSelectedCommentIndex(prevIndex => (prevIndex === index ? null : index));
        }
    };

    return (
        <>
            <div className={styles['comment-container']}>
                {data.length > 0 && (
                    data.map((comment, index) => (
                        <div key={index} className={styles['comment-item']}>
                            <CommentItem 
                                data={comment}
                                onClick={() => handleClick(index)}
                                isSelected={selectedCommentIndex === index}
                            />
                        </div>
                    ))
                )}
                {data.length <= 0 && (
                    <div className={styles['no-comment']}>
                        <p>댓글이 없습니다.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default CommentList;