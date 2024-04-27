import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileCommentList.module.css';

import CommentItem from '../comment/CommentItem';

function ProfileCommentList() {
    // 내가 쓴 댓글 조회하기
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/selling-comments/1`);
                if(response.status === 200) {
                    const filteredData = response.data.filter(item => item.user.id === 1);
                    setData(filteredData);
                }
            } catch(error) {
                console.error("댓글 불러오기 실패 : ", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {data.length > 0 &&
                <div className={styles['comment-container']}>
                    <div className={styles['comment-item']}>
                        <CommentItem data={data} />
                    </div>
                </div>
            }

            {data.length <= 0 &&
                <p>경매 댓글 없습니다.</p>
            }
        </>
    )
}

export default ProfileCommentList;