import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPostIdInfo.module.css';

function BuyingPostIdInfo({ data }) {
    // 팝니다 글쓰기 정보를 보여주는 컴포넌트
    // krStatus, location를 props로 받아서 넣기
    // 찜하기와 조회수는 api 다시 살펴보기
    return (
        <>
            <div className={styles['middleDiv']}>
                <p>#{data.krStatus}</p>
                <div className={styles['checkDiv']}>
                    <div style={{display: 'flex', columnGap: '5px'}}> <p>좋아요</p> <p>0</p> </div>
                    <div style={{display: 'flex', columnGap: '5px'}}> <p>조회</p> <p>0</p> </div>
                </div>
                <div className={styles['placeDiv']}> <p>희망 거래 장소</p> <p>{data.location}</p> </div> 
            </div>
        </>
    )
}

export default BuyingPostIdInfo;