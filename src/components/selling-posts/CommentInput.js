import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/CommentInput.module.css';


function CommentInput({ addComments, setShowBuyingInput }) {
    // 삽니다 글쓰기 selling-posts/upload
    // 내가 쓴 삽니다 글쓰기 데이터 정보 post
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const titleValue = (e) => {
        setTitle(e.target.value);
    }
    const priceValue = (e) => {
        const inputValue = e.target.value;
        if (!isNaN(inputValue)) {
            setPrice(inputValue);
        }
    }
    const locationValue = (e) => {
        setLocation(e.target.value);
    }
    const descValue = (e) => {
        setDesc(e.target.value);
    }

    const userId = Number(useSelector(state => state.userId));
    const { id } = useParams();
    const addCommentWrite = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/selling-comments`, {
                userId: userId,
                title: title,
                description: desc,
                price: price,
                location: location,
                referenceItemId: id
            });

            if (response.status === 201) {
                console.log("댓글 업로드 성공");
                addComments();
                setShowBuyingInput(false);
            } else {
                console.log("댓글 업로드 실패", response.status);
            }
        } catch(error) {
            console.error("댓글 서버 연결 실패 : ", error);
        }
    }

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['inputContainer']}>
                    {/* 제목 */}
                    <div className={styles['textDiv']}>
                        <p>제목</p>
                        <input 
                            placeholder='제목'
                            type='text'
                            value={title}
                            onChange={titleValue}
                        />
                    </div>

                    {/* 가격 */}
                    <div className={styles['textDiv']}>
                        <p>가격</p>
                        <input 
                            placeholder='희망 거래 가격' 
                            type='text' 
                            className={styles['price']}
                            value={price}
                            onChange={priceValue}
                        />
                    </div>

                    {/* 거래 희망 장소 */}
                    <div className={styles['textDiv']}>
                        <p>거래 희망 장소</p>
                        <input 
                            placeholder='희망 거래 장소'
                            type='text'
                            value={location}
                            onChange={locationValue}
                        />
                    </div>

                    {/* 설명 */}
                    <div className={styles['contextDiv']}>
                        <p>설명</p>
                        <textarea 
                            placeholder='본문'
                            value={desc}
                            onChange={descValue}
                        />
                    </div>
                </div>

                <div className={styles['hr']}> <hr /> </div>

                <div className={styles['buttonContainer']}>
                    <button className={styles['okButtonStyle']} onClick={addCommentWrite}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default CommentInput;