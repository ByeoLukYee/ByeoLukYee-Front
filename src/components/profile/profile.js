import '../../styles/common/Styles.css';
import styles from '../../styles/profile/Profile.module.css';

import TitleBar from '../common/TitleBar';
import ProfileInfo from './ProfileInfo';
import ProfileList from './ProfileList';

function Profile() {
    return(
       <div className={styles['divContainer']}>
            <TitleBar />
            <div className={styles['DivStyle']}>
                <p>프로필</p>
            </div>
            <div className={styles['profileDiv']}>
                <ProfileInfo />
            </div>
            <hr />
            <div className={styles['informationDiv']}> 
                <ProfileList />
            </div>
       </div>
    )
}

export default Profile;