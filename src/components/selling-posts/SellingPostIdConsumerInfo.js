import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostConsumerInfo.module.css';

function SellingPostIdConsumerInfo({ user }) {
    let studentId = user.studentId;
    let grade = studentId[0];
    let classroom = studentId[1];
    let number = studentId.slice(2);
    let formattedStudentId = `${grade}학년 ${classroom}반 ${number}번`;

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['outBox']}>
                    <div className={styles['img']}> <img src="/images/profileImage.png" alt="example" /> </div>
                    <div className={styles['inBox']}>
                        <p>{user.name}</p>
                        <div className={styles['userInfo']}>
                            <p>{formattedStudentId}</p>
                            <div className={styles['info']}> <p>팝니다 6</p> <p>삽니다 2</p> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingPostIdConsumerInfo;