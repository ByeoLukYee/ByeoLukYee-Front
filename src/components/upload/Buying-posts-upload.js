import '../../styles/common/styles.css';
import styles from '../../styles/upload/Buying-posts-upload.module.css';

import Header from '../common/header';
import Footer from '../common/footer';
import SellWrite from './SellWrite';

function BuyingPostsUpload() {
    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['uploadDiv']}>
                    <SellWrite />
                </div>

                <div className={styles['footer']}> <Footer /> </div>
            </div>
        </>
    )
}

export default BuyingPostsUpload;