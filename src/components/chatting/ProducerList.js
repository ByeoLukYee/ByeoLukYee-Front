import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ProducerList.module.css';

import ProducerItem from './ProducerItem';

function ProducerList() {
    return (
        <>
            <div className={styles['container']}>
                <ProducerItem />
            </div>
        </>
    )
}

export default ProducerList;