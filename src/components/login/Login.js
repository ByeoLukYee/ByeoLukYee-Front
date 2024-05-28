import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import '../../styles/common/Styles.css';
import loginStyles from '../../styles/login/Login.module.css';

import Footer from '../common/Footer';
import Header from '../common/Header';

function Login() {
    const navigate = useNavigate();
    const [fail, setFail] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 회원가입 화면으로 넘어가기
    const TextClick = (path) => {
        navigate(path);
    };

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email) {
            setErrorMessage("이메일을 입력하세요.");
            setFail(true);
            return;
        } else if (!password) {
            setErrorMessage("비밀번호를 입력하세요.");
            setFail(true);
            return;
        }

        try {
            // 서버로 로그인 요청
            const response = await axios.post(`${process.env.REACT_APP_HOST}/users/signin`, {
                email: email,
                password: password
            });

            if (response.status === 201) {
                console.log('로그인 성공');
                setFail(false);
                localStorage.setItem('id', response.data.id);
                navigate('/');
            } else {
                console.error('로그인 실패');
                setFail(true);
            }
        } catch (error) {
            setFail(true);
            if (error.response.data.errorMessage === "유저가 존재하지 않습니다.") {
                setErrorMessage('존재하지 않는 유저입니다.');
            } else if (error.response.data.errorMessage === "비밀번호가 알맞지 않습니다.") {
                setErrorMessage(error.response.data.errorMessage);
            } else {
                console.error('서버 연결 실패', error);
            }
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('id');
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
                            <p className={loginStyles['errorMessage']}>{errorMessage}</p>
                        }
                        <div className={loginStyles['buttonContainer']}>
                            <button id='btnLogin' className={loginStyles['buttonStyles']}>로그인</button>
                            <a href={`${process.env.REACT_APP_HOST}/oauth2/authorization/google`} style={{ textDecoration: 'none', color: 'black' }}>

                                <button className={loginStyles['googleButton']} type='button'>
                                    <img src={'/images/GoogleImg.png'} /> 구글로 로그인
                                </button>
                            </a>
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