import '../../styles/common/styles.css';
import styles from '../../styles/upload/Selling-posts-upload.module.css';

import Header from '../common/header';
import BuyWrite from './BuyWrite';
import Footer from '../common/footer';

function SellingPostsUpload() {
    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['uploadDiv']}>
                    <BuyWrite />
                </div>

                <div className={styles['footer']}> <Footer /> </div>
            </div>
        </>
    )
}

export default SellingPostsUpload;