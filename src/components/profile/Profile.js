import '../../styles/common/Styles.css';
import styles from '../../styles/profile/Profile.module.css';

import Header from '../common/Header';
import ProfileList from './ProfileList';
import ProfileInfo from './ProfileInfo';
import ProfileSave from './ProfileSave';
import Footer from '../common/Footer';

function Profile() {
    return( 
       <div className={styles['container']}>
            <Header />
            
            <div className={styles['divContainer']}>
                <ProfileList />

                <div className={styles['profile']}>
                    <ProfileInfo />
                    
                    <div className={styles['lists']}>
                        <ProfileSave />
                    </div>
                </div>
            </div>

            <Footer />
       </div>
    )
}

export default Profile;