import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPostIdInfo.module.css';

function BuyingPostIdInfo({ status }) {
    return (
        <>
            <div className={styles['middleDiv']}>
                <p>#{status}</p>
                <div className={styles['checkDiv']}>
                    <div style={{display: 'flex', columnGap: '5px'}}> <p>좋아요</p> <p>0</p> </div>
                    <div style={{display: 'flex', columnGap: '5px'}}> <p>조회</p> <p>0</p> </div>
                </div>
                <div className={styles['placeDiv']}> <p>희망 거래 장소</p> <p>신림역 3번 출구</p> </div> 
            </div>
        </>
    )
}

export default BuyingPostIdInfo;