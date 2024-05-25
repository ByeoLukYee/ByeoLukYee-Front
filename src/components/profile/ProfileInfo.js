import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileInfo.module.css';
import ProfileActivityInfo from './ProfileActivityInfo';

import ProfileMyInfo from './ProfileMyInfo';

function ProfileInfo({ userId, sellingPostDataLength, buyingPostDataLength, commentDataLength }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}`);
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch(error) {
                console.log("유저 데이터 GET 실패 : ", error);
            }
        }
        fetchData();
    }, []);

    // 전달 받은 sellingPostData.length, buyingPostData.length, commentData.length ProfileActivityInfo 컴포넌트에 전달
    return (
        <>
            <div className={styles['container']}>
                <ProfileMyInfo data={data}/>
                <ProfileActivityInfo 
                    sellingPostDataLength={sellingPostDataLength} 
                    buyingPostDataLength={buyingPostDataLength} 
                    commentDataLength={commentDataLength}
                />
            </div>
        </>
    )
}

export default ProfileInfo;
