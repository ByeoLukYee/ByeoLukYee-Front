import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/Selling-posts-id-consumerInfo.module.css';

function SellingPostsIdConsumerInfo() {
    return (
        <>
            <div className={styles['consumer']}>
                <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} alt='example'/> </div>
                <div className={styles['consumerInfo']}>
                    <p>name</p>
                    <div className={styles['userInfo']}>
                        <p>studentId</p>
                        <div className={styles['numSellBuy']}> <p>팝니다 6</p> <p>삽니다 2</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingPostsIdConsumerInfo;