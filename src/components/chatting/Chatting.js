import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/Chatting.module.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import ProducerList from './ProducerList';
import ChattingScreen from './ChattingScreen';

function Chatting() {
    return (
        <>
            <div className={styles['container']}>
                <Header />

                <div className={styles['bodyContainer']}>
                    <div className={styles['chattingList']}>
                        <p>나의 채팅방</p>
                        <ProducerList />
                    </div>

                    <div className={styles['chatingScreen']}>
                        <ChattingScreen />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Chatting;