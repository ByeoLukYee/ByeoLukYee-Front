import '../../styles/common/Styles.css';
import styles from '../../styles/upload/Buying-posts-upload.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
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