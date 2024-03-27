import styles from '../../styles/common/styles.css'
import profileStyle from '../../styles/profile/profile.module.css';

import TitleBar from '../common/titleBar';

import { BsPencilSquare } from "react-icons/bs";
import { PiChatThin } from "react-icons/pi";
import { BsCardText } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { LuBookMarked } from "react-icons/lu";
import { BsBoxArrowInRight } from "react-icons/bs";

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
            <div className={profileStyle['informationDiv']}> 
                {/* 내 정보 */}
                <div className={profileStyle['selectorDiv1']}>
                    <p>내 정보</p>
                    <div className={profileStyle['iconDiv']}> <BsPencilSquare style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>프로필 수정하기</p> </div>
                    <div className={profileStyle['iconDiv']}> <PiChatThin style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>채팅 관리하기</p> </div>
                    <div className={profileStyle['iconDiv']}> <BsCardText style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>작성글 관리</p> </div>
                    <div className={profileStyle['iconDiv']}> <BsEnvelope style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>이메일 인증하기</p> </div>
                </div>
                <hr />

                <div className={profileStyle['selectorDiv2']}>
                    <p>도움말</p>
                    <div className={profileStyle['iconDiv']}> <BsCodeSlash style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>오픈소스라이센스</p> </div>
                    <div className={profileStyle['iconDiv']}> <LuBookMarked style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>서비스 이용약관</p> </div>  
                </div>
                <hr />

                <div className={profileStyle['selectorDiv2']}>
                    <p>계정</p>
                    <div className={profileStyle['iconDiv']}> <BsBoxArrowInRight style={{fontSize: '1.2rem', color: 'var(--gray-300)'}} /> <p>로그아웃</p> </div>
                </div>
            </div>
       </div>
    )
}

export default Profile;