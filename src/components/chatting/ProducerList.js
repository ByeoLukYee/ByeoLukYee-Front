import React, { useEffect, useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ProducerList.module.css';

import ProducerItem from './ProducerItem';
import axios from 'axios';

function ProducerList({ onItemClick }) {
    const [clicked, setClicked] = useState('');
    const [chatrooms, setChatRooms] = useState([]);
    const handleClick = (userData) => {
        setClicked(!clicked);
        onItemClick({
            name: userData.name, 
            studentId: userData.studentId, 
            profileUrl: userData.profileUrl, 
            lastMessage: '네 그럼 거래 가능합니다.', 
            lastMessageDate: '2024-04-12' 
        });
    }

    async function ProducerListData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/chatrooms`);
            if (response.status === 200) {
                console.log("생성된 채팅방 데이터 불러오기 성공");
                setChatRooms(response.data);
            } else {
                console.log("생성된 채팅방 데이터 불러오기 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        ProducerListData();
    }, []);
    
    return (
        <>
            <div className={styles['topContainer']}>
                {
                    chatrooms && chatrooms.length > 0 ? (
                        chatrooms.map((item, index) => {
                            return (
                                <div key={index} className={clicked ? `${styles['clickedContainer']}` : styles['container']}> 
                                    <ProducerItem onClick={handleClick} userData={item.user2}/>
                                </div>
                            )
                        })
                    ) : (
                        <p>채팅방 없습니다.</p>
                    )
                }
            </div>
        </>
    )
}

export default ProducerList;