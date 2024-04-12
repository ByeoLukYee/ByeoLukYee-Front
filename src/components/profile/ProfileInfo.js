import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileInfo.module.css';
import ProfileActivityInfo from './ProfileActivityInfo';

import ProfileMyInfo from './ProfileMyInfo';

function ProfileInfo() {
    return (
        <>
            <div className={styles['container']}>
                <ProfileMyInfo />
                <ProfileActivityInfo />
            </div>
        </>
    )
}

export default ProfileInfo;
