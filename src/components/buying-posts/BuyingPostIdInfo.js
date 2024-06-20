import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPostIdInfo.module.css';

function BuyingPostIdInfo({ data }) {
    // 팝니다 글쓰기 정보를 보여주는 컴포넌트
    return (
        <>
            <div className={styles['middleDiv']}>
                <p>#{data.krStatus}</p>
                <div className={styles['checkDiv']}>
                    <div style={{display: 'flex', columnGap: '5px'}}> <p>좋아요</p> <p>{data.wishCount}</p> </div>
                    <div style={{display: 'flex', columnGap: '5px'}}> <p>조회</p> <p>{data.views+1}</p> </div>
                </div>
                <div className={styles['placeDiv']}> <p>희망 거래 장소</p> <p>{data.location}</p> </div> 
            </div>
        </>
    )
}

export default BuyingPostIdInfo;