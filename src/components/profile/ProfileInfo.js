import '../../styles/common/Style.css';
import ProfileInfoStyle from '../../styles/profile/ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <>
            <div className={ProfileInfoStyle['imgDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} /> </div>
            <div className={ProfileInfoStyle['enameDiv']}>
                <div className={ProfileInfoStyle['nameDiv']}> <p>최보람</p> </div>
                <div className={ProfileInfoStyle['emailDiv']}> <p>w2216@e-mirim.hs.kr</p> </div>
            </div>
        </>
    )
}

export default ProfileInfo;