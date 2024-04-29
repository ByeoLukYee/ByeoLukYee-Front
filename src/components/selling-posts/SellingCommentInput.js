import React, { useState } from 'react';
import { HOST } from '../../config/Config';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingCommentInput.module.css';
import { useParams } from 'react-router';


function SellingInput() {
    // comment 추가하기
    // 등록하기 버튼 클릭 시 selling-comments post
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const titleValue = (e) => {
        setTitle(e.target.value);
    }
    const priceValue = (e) => {
        setPrice(e.target.value);
    }
    const locationValue = (e) => {
        setLocation(e.target.value);
    }
    const descValue = (e) => {
        setDesc(e.target.value);
    }

    const { id } = useParams();
    const addComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${HOST}/selling-comments`, {
                userId: 1,
                title: title,
                description: desc,
                price: price,
                location: location,
                referenceItemId: id
            });
            console.log(response);

            if(response.status === 201) {
                console.log("댓글 추가 성공");
            } else {
                console.log("댓글 추가 실패 : ", response.status);
            }
        } catch(error) {
            console.log("요청 실패 : ", error);
        }
        window.location.replace(`/selling-posts/${id}`);
    }

    return (
        <>
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
                        placeholder='거래 가격' 
                        type='number' 
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

                <div className={styles['hr']}> <hr /> </div>
                
                <div className={styles['buttonContainer']}>
                    <button className={styles['buttonStyle']} onClick={addComment}>등록하기</button>
                </div>
            </div>

        </>
    )
}

export default SellingInput;