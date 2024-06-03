import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostIdInfo.module.css';

function SellingPostIdInfo({ data }) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['textContainer']}>
                    <p>#{data.krStatus}</p>
                    <div className={styles['GoodSee']}>
                        <p>조회 20</p>
                    </div>                    
                    <div className={styles['place']}>
                        <p>희망 거래 장소</p>
                        <p>{data.location}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingPostIdInfo;