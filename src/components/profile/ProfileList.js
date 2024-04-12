import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileList.module.css'

import { BsPencilSquare } from "react-icons/bs";
import { PiChatThin } from "react-icons/pi";
import { BsCardText } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { LuBookMarked } from "react-icons/lu";
import { BsBoxArrowInRight } from "react-icons/bs";

function ProfileList() {
    return (
        <>
            <div className={styles['container']}>
                {/* 내 정보 */}
                <div className={styles['selectorDiv1']}>
                    <p>내 정보</p>
                    <div className={styles['iconDiv']}> <BsPencilSquare style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>프로필 수정하기</p> </div>
                    <div className={styles['iconDiv']}> <PiChatThin style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>채팅 관리하기</p> </div>
                    <div className={styles['iconDiv']}> <BsCardText style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>작성글 관리</p> </div>
                    <div className={styles['iconDiv']}> <BsEnvelope style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>이메일 인증하기</p> </div>
                </div>

                <div className={styles['selectorDiv2']}>
                    <p>도움말</p>
                    <div className={styles['iconDiv']}> <BsCodeSlash style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>오픈소스라이센스</p> </div>
                    <div className={styles['iconDiv']}> <LuBookMarked style={{fontSize: '1.1rem', color: 'var(--gray-300)'}} /> <p>서비스 이용약관</p> </div>  
                </div>

                <div className={styles['selectorDiv2']}>
                    <p>계정</p>
                    <div className={styles['iconDiv']}> <BsBoxArrowInRight style={{fontSize: '1.2rem', color: 'var(--gray-300)'}} /> <p>로그아웃</p> </div>
                </div>
            </div>
        </>
    )
}

export default ProfileList;