import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/Buying-posts-id-info.module.css'

function BuyingPostsIdInfo({ status }) {
    return (
        <>
            <p># {status}</p>
            <div className={styles['checkDiv']}>
                <div style={{display: 'flex', columnGap: '5px'}}> <p>좋아요</p> <p>0</p> </div>
                <div style={{display: 'flex', columnGap: '5px'}}> <p>조회</p> <p>0</p> </div>
            </div>
            <div className={styles['placeDiv']}> <p>희망 거래 장소</p> <p>신림역 3번 출구</p> </div> 
        </>
    )
}

export default BuyingPostsIdInfo;