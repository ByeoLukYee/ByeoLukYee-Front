import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPostConsumerInfo.module.css';

function SellingPostIdConsumerInfo({ user }) {
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

    const filteredSellingPostData = sellingPostData.filter(post => !post.isDeleted);

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['outBox']}>
                    <div className={styles['img']}>
                        {
                            user.profileUrl ?
                            <img src={`${user.profileUrl}`} /> : <img src={'/images/profileImage.png'} />

                        }
                    </div>
                    <div className={styles['inBox']}>
                        <p>{user.name}</p>
                        <div className={styles['userInfo']}>
                            <p>{formattedStudentId}</p>
                            <div className={styles['info']}> <p>팝니다 {filteredSellingPostData.length}</p> <p>삽니다 {buyingPostData.length}</p> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingPostIdConsumerInfo;