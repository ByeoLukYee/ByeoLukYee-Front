import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { HOST } from '../../config/Config';
import { useNavigate } from "react-router-dom";

import '../../styles/common/Styles.css';
import styles from '../../styles/edit/BuyWriteEdit.module.css';

import ImageUpload from '../upload/ImageUpload';
import RadioButton from './RadioButton';

function BuyWriteEdit() {
    // 팝니다 글쓰기 buying-posts/id/edit
    // 내가 쓴 팝니다 글쓰기 정보 수정
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [postStatus, setPostStatus] = useState(0);

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

    const [data, setData] = useState([]);
    const { id } = useParams();
    const update = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${HOST}/selling-posts/${id}`, {
                title: title,
                description: desc,
                price: price,
                location: location,
                status: postStatus
            });
            console.log(response);

            if (response.status === 201) {
                console.log("업데이트 성공");
                navigate(`/buying-posts/${id}`);
            } else {
                console.error("업데이트 실패");
            }

        } catch(error) {
            console.error("데이터 삽입 실패 : ", error);
        }
    }

    return (
        <>
             <div className={styles['container']}>
                <div className={styles['topDiv']}>
                    <ImageUpload />
                </div>

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
                            placeholder='상품 상세 정보'
                            value={desc}
                            onChange={descValue}
                        />
                    </div>

                    {/* 라디오 버튼 */}
                    <RadioButton quantity={3} labelNames={['판매중', '예약중', '판매완료']} setSelectedOption={setPostStatus}/>
                </div>

                <div className={styles['hr']}> <hr /> </div>

                <div className={styles['buttonContainer']}>
                    <button className={styles['buttonStyle']} onClick={update}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default BuyWriteEdit;