import React from 'react';
import { useNavigate } from "react-router-dom";

import loginStyles from '../../styles/login/login.module.css'
import styles from '../../styles/common/styles.css';

function Login() {
    // 회원가입 화면으로 넘어가기
    const navigate = useNavigate();
    const TextClick = (path) => {
      navigate(path);
    };

    return (
        <div className={loginStyles['container']}>
            <div className={loginStyles['titleContainer']}>
                <p className={loginStyles['titleP']}>우리 학교의 작은 마켓</p> {/* S-Core Dream 3Ling 글꼴 */}
                <h3 className={loginStyles['titleH3']}>벼룩이</h3> {/* Kyobo HandWriting 2019 Regular 글꼴 */}
            </div>
            <form className={loginStyles['formContainer']}>
                <div>
                    <p className={loginStyles['textStyle']}>이메일</p> {/* SUIT Medium 글꼴(input도) */}
                    <input type="text" placeholder='학교 이메일을 입력하시오.' className={loginStyles['inputStyles']}/>
                </div>
                <div style={{marginBottom: '15%'}}>
                    <p className={loginStyles['textStyle']}>비밀번호</p> {/* SUIT Medium 글꼴(input도) */}
                    <input type='text' placeholder='비밀번호를 입력하시오.' className={loginStyles['inputStyles']}/>
                </div>
                <div className={loginStyles['buttonContainer']}>
                    <button className={loginStyles['buttonStyles']}>로그인</button> {/* SUIT Medium 글꼴 */}
                    <button className={loginStyles['googleButton']}> <img src={process.env.PUBLIC_URL + '/images/GoogleImg.png'} /> 구글로 로그인</button>
                </div>
                <div className={loginStyles['miniTextStyles']}>
                    <p>계정이 없다면?</p>
                    <p onClick={() => TextClick('/join')}>회원가입</p>
                </div>
            </form>
        </div>
    )
}

export default Login;