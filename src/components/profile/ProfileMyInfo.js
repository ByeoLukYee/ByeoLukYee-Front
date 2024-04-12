import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileMyInfo.module.css';

function ProfileMyInfo() {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} /> </div>
                <div className={styles['information']}>
                    <div className={styles['enameDiv']}>
                        <div className={styles['nameDiv']}> <p>최보람</p> </div>
                        <div className={styles['emailDiv']}> <p>w2216@e-mirim.hs.kr</p> </div>
                    </div>
                    <div className={styles['studentId']}> <p>3학년 4반 13번</p> </div>
                </div>
            </div>
        </>
    )
}

export default ProfileMyInfo;