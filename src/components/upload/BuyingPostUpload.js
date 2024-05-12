import '../../styles/common/Styles.css';
import styles from '../../styles/upload/BuyingPostUpload.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import BuyingInput from './BuyingInput';

function BuyingPostsUpload() {
    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['uploadDiv']}>
                    <BuyingInput />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default BuyingPostsUpload;