import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ChattingProducer.module.css';

function ChattingProducer({ name }) {
    return (
        <>
             <div className={styles['container']}>
                <div className={styles['img']}> <img src='/images/profileImage.png' alt='example'/> </div>
                <div className={styles['textDiv']}>
                    <p>{name}</p>
                    <p>3413</p>
                </div>
            </div>
        </>    
    )
}

export default ChattingProducer;