import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';
import { useParams } from 'react-router';

import '../../styles/common/Styles.css';
import styles from '../../styles/comment/CommentList.module.css';

import CommentItem from './CommentItem';

function CommentList() {
    // /selling-comments에서 GET하기
    // title, price, location, desc CommentItem에 전달하기
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/buying-posts/${id}/selling-comments`);
                if(response.status === 200) {
                    setData(response.data);
                }
            } catch(error) {
                console.error("댓글 불러오기 실패 : ", error);
            }
        }
        fetchData();
    }, [id]);

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const handleClick = (index) => {
        setSelectedItemIndex(index);
    };

    return (
        <>
            <div className={styles['comment-container']}>
                {data.length > 0 && (
                    data.map((comment, index) => (
                        <div key={index} className={styles['comment-item']}>
                            <CommentItem 
                                data={comment}
                                onClick={() => handleClick(index)}
                                isSelected={selectedItemIndex === index}
                            />
                        </div>
                    ))
                )}
                {data.length <= 0 && (
                    <div className={styles['no-comment']}>
                        <p>댓글이 없습니다.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default CommentList;