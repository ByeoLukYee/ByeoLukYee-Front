import React from 'react';
import { useNavigate } from "react-router-dom";

import joinStyles from '../../styles/join/join.module.css';
import styles from '../../styles/common/styles.css';
import TitleBar from '../common/titleBar';
import { handleJoinClick } from '../../sevices/join/join';

function Join() {
    // 로그인 화면으로 넘어가기
    const navigate = useNavigate();
    const TextClick = (path) => {
      navigate(path);
    };

    return(
        <div className={joinStyles['divContainer']}>
            <TitleBar />
            <div className={joinStyles['DivStyle']}>
                <p>회원가입</p>
            </div>
            <div className={joinStyles['formContainer']}>
                <div>
                    <p className={joinStyles['textStyle']}>이름</p> {/* SUIT Medium 글꼴(input도) */}
                    <input id="txtName" type="text" placeholder='이름을 입력하시오.' className={joinStyles['inputStyles']}/>
                </div>
                <div>
                    <p className={joinStyles['textStyle']}>이메일</p> {/* SUIT Medium 글꼴(input도) */}
                    <input id="txtEmail" type="text" placeholder='학교 이메일을 입력하시오.' className={joinStyles['inputStyles']}/>
                </div>
                <div>
                    <p className={joinStyles['textStyle']}>비밀번호</p> {/* SUIT Medium 글꼴(input도) */}
                    <input id="txtPw" type="password" placeholder='비밀번호를 입력하시오.' className={joinStyles['inputStyles']}/>
                </div>
                <div>
                    <p className={joinStyles['textStyle']}>비밀번호 검사</p> {/* SUIT Medium 글꼴(input도) */}
                    <input id="txtRePw" type="password" placeholder='비밀번호를 입력하시오.' className={joinStyles['inputStyles']}/>
                </div>
                <div>
                    <p className={joinStyles['textStyle']}>학생 정보</p> {/* SUIT Medium 글꼴(input도) */}
                    <div className={joinStyles['studentDivStyle']}>
                        <div> <input id='txtGrade' type='text' placeholder='학년' className={joinStyles['studentInputStyles']}/> </div>
                        <div> <input id='txtClass' type='text' placeholder='반' className={joinStyles['studentInputStyles']}/> </div>
                        <div> <input id='txtNumber' type='text' placeholder='번호' className={joinStyles['studentInputStyles']}/> </div>
                    </div>
                </div>
                <div className={joinStyles['buttontextContainer']}>
                    <div className={joinStyles['buttonContainer']}>
                        <button id='btnJoin' className={joinStyles['buttonStyles']} onClick={handleJoinClick}>회원가입</button> {/* SUIT Medium 글꼴 */}
                    </div>
                    <div className={joinStyles['miniTextStyles']}>
                        <p>이미 계정이 있다면?</p>
                        <p onClick={() => TextClick('/')}>로그인하기</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join;