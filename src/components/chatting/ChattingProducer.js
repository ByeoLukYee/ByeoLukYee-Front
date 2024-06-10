import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ChattingProducer.module.css';

function ChattingProducer({ producer }) {
    return (
        <>
             <div className={styles['container']}>
                <div className={styles['img']}> <img src={producer.profileUrl} alt='example'/> </div>
                <div className={styles['textDiv']}>
                    <p>{producer.name}</p>
                    <p>{producer.studentId}</p>
                </div>
            </div>
        </>    
    )
}

export default ChattingProducer;