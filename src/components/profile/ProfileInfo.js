import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <>
            <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} /> </div>
            <div className={styles['enameDiv']}>
                <div className={styles['nameDiv']}> <p>nameDiv</p> </div>
                <div className={styles['emailDiv']}> <p>email</p> </div>
            </div>
        </>
    )
}

export default ProfileInfo;