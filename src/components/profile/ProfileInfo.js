import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileInfo.module.css';
import ProfileActivityInfo from './ProfileActivityInfo';

import ProfileMyInfo from './ProfileMyInfo';

function ProfileInfo() {
    const [data, setData] = useState([]);
    let userId = Number(localStorage.getItem('userId'));
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/users/${userId}`);
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch(error) {
                console.log("유저 데이터 GET 실패 : ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className={styles['container']}>
                <ProfileMyInfo data={data}/>
                <ProfileActivityInfo />
            </div>
        </>
    )
}

export default ProfileInfo;
