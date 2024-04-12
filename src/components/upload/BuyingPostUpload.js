import '../../styles/common/Styles.css';
import styles from '../../styles/upload/BuyingPostUpload.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import BuyWrite from './BuyWrite';

function BuyingPostsUpload() {
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

export default BuyingPostsUpload;