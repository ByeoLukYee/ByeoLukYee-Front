import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostConsumerInfo.module.css';

function SellingPostIdConsumerInfo() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['outBox']}>
                    <div className={styles['img']}> <img src={process.env.PUBLIC_URL + "/images/exampleImg.png"} alt="example" /> </div>
                    <div className={styles['inBox']}>
                        <p>최보람</p>
                        <div className={styles['userInfo']}>
                            <p>3학년 4반 13번</p>
                            <div className={styles['info']}> <p>팝니다 6</p> <p>삽니다 2</p> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingPostIdConsumerInfo;