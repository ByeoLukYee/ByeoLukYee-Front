import '../../styles/common/Style.css';
import profileStyle from '../../styles/profile/profile.module.css';

import Header from '../common/Header';
import ProfileInfo from './ProfileInfo';
import ProfileList from './ProfileList';

function Profile() {
    return( 
       <div className={profileStyle['divContainer']}>
            <Header />
            <div className={profileStyle['DivStyle']}>
                <p>프로필</p>
            </div>
            <div className={profileStyle['profileDiv']}>
                <ProfileInfo />
            </div>
            <hr />
            <div className={profileStyle['informationDiv']}> 
                <ProfileList />
            </div>
       </div>
    )
}

export default Profile;