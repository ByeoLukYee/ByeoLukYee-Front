import '../../styles/common/Styles.css';
import styles from '../../styles/upload/SellingPostUpload.module.css';

import SellingInput from './SellingInput';
import Header from '../common/Header';
import Footer from '../common/Footer';

function SellingPostsUpload() {
    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['uploadDiv']}>
                    <SellingInput />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default SellingPostsUpload;