import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/chatting/ProducerList.module.css';

import ProducerItem from './ProducerItem';

function ProducerList({ onItemClick, userId }) {
    const [clicked, setClicked] = useState(null);
    const [chatrooms, setChatRooms] = useState([]);
    const handleClick = (yourData, index) => {
        setClicked(index);
        onItemClick({
            name: yourData.name, 
            studentId: yourData.studentId, 
            profileUrl: yourData.profileUrl,
        });
    }

    async function ProducerListData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}/chatrooms`);
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
                            let yourData;
                            if (item.user1.id === userId) {
                                yourData = item.user2
                            } else {
                                yourData = item.user1
                            }
                            return (
                                <div key={index} className={clicked === index ? `${styles['clickedContainer']}` : styles['container']}> 
                                    <ProducerItem 
                                        userData={yourData} 
                                        chatRoomId={item.id}
                                        onClick={() => handleClick(yourData, index)}
                                    />
                                </div>
                            )
                        })
                    ) : (
                        <p>채팅방이 존재하지 않습니다.</p>
                    )
                }
            </div>
        </>
    )
}

export default ProducerList;