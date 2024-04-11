import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { HOST } from "../../config/config";

import loginStyles from '../../styles/login/login.module.css';

import Footer from '../common/footer';
import Header from '../common/header';

function Login() {
    // 회원가입 화면으로 넘어가기
    const navigate = useNavigate();
    const TextClick = (path) => {
        navigate(path);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // 서버로 로그인 요청
            // `${HOST}/signin`
            // http://localhost:8080/signin
            const response = await axios.post(`${HOST}/users/signin`, {
                email: email,
                password: password
            });

            if (response.status === 201) {
                console.log('로그인 성공');
                navigate('/');
            } else {
                console.error('로그인 실패');
            }
        } catch (error) {
            console.error('로그인 요청 중 에러:', error);
        }
    };

    return (
        <div className={loginStyles['container']}>
            <Header />
            <div className={loginStyles['formDiv']}>
                <div className={loginStyles['titleContainer']}>
                    <p className={loginStyles['titleP']}>우리 학교의 작은 마켓</p>
                    <h3 className={loginStyles['titleH3']}>벼룩이</h3>
                </div>
                <form className={loginStyles['formContainer']} onSubmit={handleLogin}>
                    <div className={loginStyles['inputContainer']}>
                        <div>
                            <p className={loginStyles['textStyle']}>이메일</p>
                            <input id='txtEmail' type="text" placeholder='학교 이메일을 입력하시오.' className={loginStyles['inputStyles']} onChange={handleEmailChange} value={email} />
                        </div>
                        <div style={{ marginBottom: '5%' }}>
                            <p className={loginStyles['textStyle']}>비밀번호</p>
                            <input id='txtPw' type="password" placeholder='비밀번호를 입력하시오.' className={loginStyles['inputStyles']} onChange={handlePasswordChange} value={password} />
                        </div>
                        <div className={loginStyles['buttonContainer']}>
                            <button id='btnLogin' className={loginStyles['buttonStyles']} type="submit">로그인</button>
                            <button className={loginStyles['googleButton']}> <img src={process.env.PUBLIC_URL + '/images/GoogleImg.png'} /> 구글로 로그인</button>
                        </div>
                    </div>
                    <div className={loginStyles['miniTextStyles']}>
                        <p>계정이 없다면?</p>
                        <p onClick={() => TextClick('/signup')}>회원가입</p>
                    </div>
                </form>
            </div>
            <div className={loginStyles['footerStyle']}> <Footer /> </div>
        </div>
    )
}

export default Login;