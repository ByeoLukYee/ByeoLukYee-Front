import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/Selling-posts-id-info.module.css';

function SellingPostsIdInfo() {
    return (
        <>
            <div className={styles['info']}>
                <p>#경매중</p>
                <div className={styles['GoodCheck']}> <p>좋아요 4</p> <p>조회 20</p> </div>
                <div className={styles['place']}> <p>희망 거래 장소</p> <p>place</p> </div>
            </div>
        </>
    )
}

export default SellingPostsIdInfo;