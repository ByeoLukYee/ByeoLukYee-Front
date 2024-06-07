import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileSave.module.css'

import ProfileSellingPostItemList from './ProfileSellingPostItemList';
import BuyPostItemList from '../../components/buying-Item/BuyPostItemList';
import axios from 'axios';

function ProfileSave() {
    const [data, setData] = useState([]);
    const userId = useSelector(state => state.userId);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}/wishes`);
                if (response.status === 200) {
                    console.log("내가 찜한 팝니다 데이터 불러오기 성공");
                    setData(response.data);
                } else {
                    console.log("내가 찜한 팝니다 데이터 불러오기 실패", response.status);
                }
            } catch(error) {
                console.error("서버 연결 실패", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['sellContainer']}>
                    <p>내가 찜한 팝니다 글</p>

                    <div className={styles['itemList']}>
                        <ProfileSellingPostItemList sellingPostData={data} />
                    </div>
                </div>

                {/* <div className={styles['buyContainer']}>
                    <p>내가 찜한 삽니다 글</p>

                    <div className={styles['itemList']}>
                        <BuyPostItemList />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default ProfileSave;