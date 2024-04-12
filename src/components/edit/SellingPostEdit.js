import '../../styles/common/Styles.css';
import styles from '../../styles/edit/SellingPostEdit.module.css';

import Header from '../common/Header';
import SellWriteEdit from '../edit/SellWriteEdit';
import Footer from '../common/Footer';

function SellingPostEdit() {
    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['uploadDiv']}>
                    <SellWriteEdit />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default SellingPostEdit;