import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostIdInfo.module.css';

function SellingPostIdInfo() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['textContainer']}>
                    <p>#경매중</p>
                    <div className={styles['GoodSee']}>
                        <p>좋아요 4</p>
                        <p>조회 20</p>
                    </div>                    
                    <div className={styles['place']}>
                        <p>희망 거래 장소</p>
                        <p>신림역 3번출구</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingPostIdInfo;