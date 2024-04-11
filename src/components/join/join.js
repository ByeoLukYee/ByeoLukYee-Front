import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { HOST } from "../../config/config";

import joinStyles from '../../styles/join/join.module.css';
import styles from '../../styles/common/styles.css';

import Header from '../common/header';
import Footer from '../common/footer';

function Join() {
    // 로그인 화면으로 넘어가기
    const navigate = useNavigate();
    const TextClick = (path) => {
      navigate(path);
    };

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData(data => ({
            ...data,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const studentId = `${userData.grade}학년 ${userData.class}반 ${userData.number}번`;

            // `${HOST}/users`
            // http://localhost:8080/users
            const response = await axios.post(`${HOST}/users`, {
                ...userData,
                studentId: studentId
            });
            console.log(response.data);

            if (response.ok) {
                console.log('회원가입 성공');
                navigate('/signin');
            } else {
                console.error('회원가입 실패');
            }
        } catch (error) {
            console.error('회원가입 요청 중 에러:', error);
        }
    };

    // 비밀번호 값 변경 시
    const handleConfirmPasswordChange = (e) => {
        const { value } = e.target;
        setUserData(data => ({
            ...data,
            confirmPassword: value
        }));
    };

    // 비밀번호 검사
    const validatePassword = () => {
        if (userData.password !== userData.confirmPassword) {
            setPasswordMismatch(true); // 비밀번호 불일치 설정
            return false;
        }
        setPasswordMismatch(false); // 비밀번호 일치 설정
        return true;
    };

    return(
        <div className={joinStyles['divContainer']}>
            <Header />
            <div className={joinStyles['formDiv']}>
                <div className={joinStyles['joinText']}> <p>회원가입</p> </div>
                <form className={joinStyles['formContainer']} onSubmit={handleSubmit}>
                    <div className={joinStyles['inputContainer']}>
                        <div>
                            <p className={joinStyles['textStyle']}>이름</p>
                            <input id="name" type="text" placeholder='이름을 입력하시오.' className={joinStyles['inputStyles']} onChange={handleChange}/>
                        </div>
                        <div>
                            <p className={joinStyles['textStyle']}>이메일</p>
                            <input id="email" type="text" placeholder='학교 이메일을 입력하시오.' className={joinStyles['inputStyles']} onChange={handleChange}/>
                        </div>
                        <div>
                            <p className={joinStyles['textStyle']}>비밀번호</p>
                            <input id="password" type="password" placeholder='비밀번호를 입력하시오.' className={joinStyles['inputStyles']} onChange={handleChange}/>
                        </div>
                        <div>
                            <p className={joinStyles['textStyle']}>비밀번호 검사</p>
                            <input id="txtRePw" type="password" placeholder='비밀번호를 입력하시오.' className={joinStyles['inputStyles']} onChange={handleConfirmPasswordChange}/>
                            {passwordMismatch && <p className={joinStyles['errorText']}>비밀번호가 일치하지 않습니다.</p>}
                        </div>
                        <div>
                            <p className={joinStyles['textStyle']}>학생 정보</p>
                            <div className={joinStyles['studentDivStyle']}>
                                <div> <input id='txtGrade' type='text' placeholder='학년' className={joinStyles['studentInputStyles']} onChange={handleChange}/> </div>
                                <div> <input id='txtClass' type='text' placeholder='반' className={joinStyles['studentInputStyles']} onChange={handleChange}/> </div>
                                <div> <input id='txtNumber' type='text' placeholder='번호' className={joinStyles['studentInputStyles']} onChange={handleChange}/> </div>
                            </div>
                        </div>
                        <div className={joinStyles['buttonContainer']}>
                            <button id='btnJoin' className={joinStyles['buttonStyles']} type='submit' onClick={validatePassword}>회원가입</button>
                        </div>
                    </div>
                    <div className={joinStyles['miniTextStyles']}>
                        <p>이미 계정이 있다면?</p>
                        <p onClick={() => TextClick('/')}>로그인하기</p>
                    </div>
                </form>
            </div>
            <div className={joinStyles['footerStyle']}> <Footer /> </div>
        </div>
    )
}

export default Join;