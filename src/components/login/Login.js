import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import loginStyles from '../../styles/login/Login.module.css';
import '../../styles/common/Styles.css';

import Footer from '../common/Footer';
import Header from '../common/Header';

function Login() {
    const [fail, setFail] = useState(false);

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
            const response = await axios.post(`${process.env.REACT_APP_HOST}/users/signin`, {
                email: email,
                password: password
            });

            if (response.status === 201) {
                console.log('로그인 성공');
                setFail(false);
                localStorage.setItem('userId', response.data.id);
                navigate('/');
            } else {
                console.error('로그인 실패');
                setFail(true);
            }
        } catch (error) {
            console.error('로그인 요청 중 에러:', error);
            setFail(true);
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            navigate('/');
        }
    }, [navigate]);

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
                        {
                            fail &&
                            <p className={loginStyles['errorMessage']}>이메일과 비밀번호가 틀렸습니다.</p>
                        }
                        <div className={loginStyles['buttonContainer']}>
                            <button id='btnLogin' className={loginStyles['buttonStyles']} type="submit">로그인</button>
                            <button className={loginStyles['googleButton']}> <img src={'/images/GoogleImg.png'} /> 구글로 로그인</button>
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