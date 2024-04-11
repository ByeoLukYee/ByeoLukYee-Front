import '../../styles/common/Style.css';
import profileStyle from '../../styles/profile/profile.module.css';

import TitleBar from '../common/titleBar';
import ProfileInfo from './ProfileInfo';
import ProfileList from './ProfileList';

function Profile() {
    return( 
       <div className={profileStyle['divContainer']}>
            <TitleBar />
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