import styles from '../../styles/common/styles.css'
import profileStyle from '../../styles/profile/profile.module.css';

import TitleBar from '../common/titleBar';

function Profile() {
    return(
       <div className={profileStyle['divContainer']}>
            <TitleBar />
            <div className={profileStyle['DivStyle']}>
                <p>프로필</p>
            </div>
            <div className={profileStyle['profileDiv']}>
                <div className={profileStyle['imgDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} /> </div>
                <div className={profileStyle['enameDiv']}>
                    <div className={profileStyle['nameDiv']}> <p>최보람</p> </div>
                    <div className={profileStyle['emailDiv']}> <p>w2216@e-mirim.hs.kr</p> </div>
                </div>
            </div>
            <hr />
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
       </div>
    )
}

export default Profile;