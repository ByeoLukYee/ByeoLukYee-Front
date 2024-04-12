import '../../styles/common/Styles.css';
import styles from '../../styles/edit/BuyingPostEdit.module.css';

import Header from '../common/Header';
import BuyWriteEdit from './BuyWriteEdit';
import Footer from '../common/Footer';

function BuyingPostEdit() {
    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['uploadDiv']}>
                    <BuyWriteEdit />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default BuyingPostEdit;