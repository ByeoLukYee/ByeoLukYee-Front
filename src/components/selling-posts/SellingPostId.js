import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostId.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import SellingPostIdConsumerInfo from './SellingPostIdConsumerInfo';
import SellingPostIdInfo from './SellingPostIdInfo';
import CommentList from '../comment/CommentList';

function SellingPostId() {
    return (
        <div className={styles['container']}>
            <Header />
            
            <div className={styles['allContainer']}>
                <div className={styles['topContainer']}>
                    <div className={styles['container1']}>
                        <div className={styles['contextDiv']}>
                            <p>title</p>
                            <hr />
                            <p>context</p>
                        </div>
                        <div className={styles['priceDiv']}>
                            <p>희망 거래 가격</p>
                            <div className={styles['price']}> <p>price</p> <p>원 이하</p> </div>
                        </div>
                    </div>
                    <div className={styles['container2']}>
                        <div className={styles['profile']}>
                            <div className={styles['information']}>
                                <SellingPostIdConsumerInfo />
                                <SellingPostIdInfo />
                            </div>
                            <div className={styles['button']}> <button>참여하기</button> </div>
                        </div>
                    </div>
                </div>
                <div className={styles['hr']}> <hr /> </div>
                <div className={styles['bottomContainer']}>
                    <p>경매댓글</p>
                    <div className={styles['commentContainer']}>
                        <CommentList />
                    </div>
                </div>

                
            </div>
            <Footer />
        </div>
    )
}

export default SellingPostId; 
