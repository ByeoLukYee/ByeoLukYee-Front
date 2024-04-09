import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/Buying-posts-id-producerInfo.module.css';

function BuyingPostsIdProducerInfo() {
    return (
        <>
            <div className={styles['userDiv']}>
                <div className={styles['userImg']}> <img src={process.env.PUBLIC_URL + "/images/exampleImg.png"} alt="example" /> </div>
                <div className={styles['profileDiv']}>
                    <p>name</p>
                    <div className={styles['myInformation']}>
                        <p>studentId</p>
                        <div style={{display: 'flex', columnGap: '15px'}}>
                            <p>팝니다 6</p> 
                            <p>삽니다 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyingPostsIdProducerInfo;