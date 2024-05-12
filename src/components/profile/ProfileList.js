import React from 'react';
import { useNavigate } from "react-router-dom";
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileList.module.css'

import { BsPencilSquare } from "react-icons/bs";
import { PiChatThin } from "react-icons/pi";
import { BsCardText } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { LuBookMarked } from "react-icons/lu";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsPersonX } from "react-icons/bs";


function ProfileList({ showSelectComponent, userId }) {
    const navigate = useNavigate();
    const userIdRemove = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${HOST}/users/${userId}`);
            if (response.status === 204) {
                console.log("로그아웃 성공");
                navigate('/signin');
                localStorage.removeItem('userId');
            } else {
                console.log("로그아웃 실패", response.status);
            }
        } catch(error) {
            console.log("서버 연결 실패 : ", error);
        }
    }

    const Logout = () => {
        console.log("로그아웃 성공");
        localStorage.removeItem('userId');
        navigate('/signin');
    }

    return (
        <>
            <div className={styles['container']}>
                {/* 내 정보 */}
                <div className={styles['selectorDiv1']}>
                    <p>내 정보</p>
                    <div className={styles['iconDiv']}> <BsPencilSquare className={styles['icon']} /> <p>프로필 수정하기</p> </div>
                    <div className={styles['iconDiv']}> <PiChatThin className={styles['icon']} /> <p>채팅 관리하기</p> </div>
                    
                    <div className={styles['iconDiv']} onClick={() => showSelectComponent('writeManagement')}> <BsCardText className={styles['icon']} /> <p>작성글 관리</p> </div>
                    
                    <div className={styles['iconDiv']}> <BsEnvelope className={styles['icon']} /> <p>이메일 인증하기</p> </div>
                </div>

                <div className={styles['selectorDiv2']}>
                    <p>도움말</p>
                    <div className={styles['iconDiv']}> <BsCodeSlash className={styles['icon']} /> <p>오픈소스라이센스</p> </div>
                    <div className={styles['iconDiv']}> <LuBookMarked className={styles['icon']} /> <p>서비스 이용약관</p> </div>  
                </div>

                <div className={styles['selectorDiv2']}>
                    <p>계정</p>
                    <div className={styles['iconDiv']}> <BsBoxArrowInRight className={styles['icon']} /> <p onClick={Logout}>로그아웃</p> </div>
                    <div className={styles['iconDiv']}> <BsPersonX className={styles['icon']} /> <p onClick={userIdRemove}>탈퇴하기</p> </div>
                </div>
            </div>
        </>
    )
}

export default ProfileList;