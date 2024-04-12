import '../../styles/common/Styles.css';
import styles from '../../styles/upload/SellingPostUpload.module.css';

import SellWrite from './SellWrite';
import Header from '../common/Header';
import Footer from '../common/Footer';

function SellingPostsUpload() {
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

export default SellingPostsUpload;