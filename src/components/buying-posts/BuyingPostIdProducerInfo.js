import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPostIdProducerInfo.module.css';

function BuyingPostIdProducerInfo({ user }) {
    const [sellingPostData, setSellingPostData] = useState([]);
    const [buyingPostData, setBuyingPostData] = useState([]);

    const userId = user.id;
    useEffect(() => {
        async function sellingData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}/selling-posts`);
                if (response.status === 200) {
                    console.log("팝니다 정보 가져오기 성공");
                    setSellingPostData(response.data);
                } else {
                    console.log("팝니다 정보 가져오기 실패", response.status);
                }
            } catch (error) {
                console.error("팝니다 서버 연결 실패: ", error);
            }
        };

        async function buyingData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}/buying-posts`);
                if (response.status === 200) {
                    console.log("삽니다 정보 가져오기 성공");
                    setBuyingPostData(response.data);
                } else {
                    console.log("삽니다 정보 가져오기 실패", response.status);
                }
            } catch (error) {
                console.error("삽니다 서버 연결 실패: ", error);
            }
        };

        buyingData();
        sellingData();
    }, []);

    let studentId = user.studentId;
    let grade = studentId[0];
    let classroom = studentId[1];
    let number = studentId.slice(2);
    let formattedStudentId = `${grade}학년 ${classroom}반 ${number}번`;
    
    return (
        <>
        <div className={styles['userImg']}>
            {
                user.profileUrl ?
                <img src={`${user.profileUrl}`} /> : <img src={'/images/profileImage.png'} />

            }
        </div>
            <div className={styles['profileDiv']}>
                <p>{user.name}</p>
                <div className={styles['myInformation']}>
                    <p>{formattedStudentId}</p>
                    <div style={{display: 'flex', columnGap: '15px'}}>
                        <div style={{display: 'flex', columnGap: '5px'}}> <p>팝니다</p> <p>{sellingPostData.length}</p> </div> 
                        <div style={{display: 'flex', columnGap: '5px'}}> <p>삽니다</p> <p>{buyingPostData.length}</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyingPostIdProducerInfo;