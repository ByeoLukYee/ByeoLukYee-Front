import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileActivityInfo.module.css';

function ProfileActivityInfo() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['sellingDiv']}>
                    <p>팝니다글</p>
                    <p>9</p>
                </div>

                <div className={styles['line']}></div>
                
                <div className={styles['buyingDiv']}>
                    <p>삽니다글</p>
                    <p>7</p>
                </div>

                <div className={styles['line']}></div>

                <div className={styles['auctionDiv']}>
                    <p>경매참여</p>
                    <p>2</p>
                </div>
            </div>
        </>
    )
}

export default ProfileActivityInfo;