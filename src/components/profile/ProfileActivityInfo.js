import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileActivityInfo.module.css';

function ProfileActivityInfo({ sellingPostDataLength, buyingPostDataLength, commentDataLength }) {
    // 전달 받은 sellingPostData.length, buyingPostData.length 화면에 보여주기
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['sellingDiv']}>
                    <p>팝니다글</p>
                    <p>{sellingPostDataLength}</p>
                </div>

                <div className={styles['line']}></div>
                
                <div className={styles['buyingDiv']}>
                    <p>삽니다글</p>
                    <p>{buyingPostDataLength}</p>
                </div>

                <div className={styles['line']}></div>

                <div className={styles['auctionDiv']}>
                    <p>경매참여</p>
                    <p>{commentDataLength}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileActivityInfo;