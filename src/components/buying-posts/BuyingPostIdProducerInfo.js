import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPostIdProducerInfo.module.css';

function BuyingPostIdProducerInfo() {
    // 사용자의 정보를 보여주는 컴포넌트
    // user/ name, studentId를 props로 받아서 넣기
    // 팝니다와 삽니다 갯수는 api 다시 살펴보기
    return (
        <>
        <div className={styles['userImg']}> <img src="/images/exampleImg.png" alt="example" /> </div>
            <div className={styles['profileDiv']}>
                <p>최보람</p>
                <div className={styles['myInformation']}>
                    <p>3학년 4반 13번</p>
                    <div style={{display: 'flex', columnGap: '15px'}}>
                        <div style={{display: 'flex', columnGap: '5px'}}> <p>팝니다</p> <p>6</p> </div> 
                        <div style={{display: 'flex', columnGap: '5px'}}> <p>삽니다</p> <p>2</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyingPostIdProducerInfo;