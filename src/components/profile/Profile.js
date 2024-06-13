import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/Profile.module.css';

import Header from '../common/Header';
import ProfileList from './ProfileList';
import ProfileInfo from './ProfileInfo';
import ProfileSave from './ProfileSave';
import ProfileWriteManagement from './PostWriteManagement';
import Footer from '../common/Footer';

function Profile() {
    const [showSelectComponent, setShowSelectComponent] = useState('');
    const [sellingPostData, setSellingPostData] = useState([]);
    const [buyingPostData, setBuyingPostData] = useState([]);
    const [commentData, setCommentData] = useState([]);
    
    const userId = Number(useSelector(state => state.userId));
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

        async function commentData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}/selling-comments`);
                if(response.status === 200) {
                    console.log("댓글 정보 가져오기 성공");
                    setCommentData(response.data);
                } else {
                    console.log("댓글 정보 가져오기 실패", response.status);
                }
            } catch(error) {
                console.error("댓글 서버 연결 실패 : ", error);
            }
        }


        buyingData();
        sellingData();
        commentData();
    }, []);

    const filteredSellingPostData = sellingPostData.filter(post => !post.isDeleted);

    const showComponent = () => {
        switch (showSelectComponent) {
            case 'writeManagement':
                return <ProfileWriteManagement sellingPostData={filteredSellingPostData} buyingPostData={buyingPostData} commentData={commentData} />;
            default:
                return <ProfileSave />;
        }
    };


    return( 
       <div className={styles['container']}>
            <Header />
            
            <div className={styles['divContainer']}>
                <ProfileList showSelectComponent={setShowSelectComponent} userId={userId} />

                <div className={styles['profile']}>
                    <div className={styles['profileInfo']}>
                        <ProfileInfo 
                            userId={userId} 
                            sellingPostDataLength={filteredSellingPostData.length} 
                            buyingPostDataLength={buyingPostData.length} 
                            commentDataLength={commentData.length}
                        />
                    </div>
                    
                    <div className={styles['lists']}>
                        {/* 바뀌는 화면 */}
                        {showComponent()}
                    </div>
                </div>
            </div>

            <Footer />
       </div>
    )
}

export default Profile;