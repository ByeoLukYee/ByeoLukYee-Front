import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";

import '../../styles/common/Styles.css';
import styles from '../../styles/edit/SellWriteEdit.module.css';

import RadioButton from './RadioButton';

function SellWriteEdit({ updateData }) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [postStatus, setPostStatus] = useState(0);

    useEffect(() => {
        if (updateData) {
            setTitle(updateData.title);
            setDesc(updateData.description);
            setPrice(updateData.price);
            setLocation(updateData.location);
        }
    }, [updateData]);

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

    const labelNames=['경매중', '경매마감'];
    const optionValue = (e) => {
        setPostStatus(labelNames[postStatus]);
    }

    const { id } = useParams();
    const update = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.put(`${process.env.REACT_APP_HOST}/buying-posts/${id}`, {
                title: title,
                description: desc,
                price: price,
                location: location,
                status: postStatus
            });

            if (request.status === 200) {
                console.log("업데이트 성공");
                navigate(`/selling-posts/${id}`);
            } else {
                console.error("업데이트 실패", request.status);
            }

        } catch(error) {
            console.error("데이터 삽입 실패 : ", error);
        }
    }

    const remove = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${process.env.REACT_APP_HOST}/buying-posts/${id}`);
            if (response.status === 204) {
                console.log("게시글 삭제 완료", response.data);
                navigate('/buying-posts');
            } else {
                console.log("게시글 삭제 실패 : ", response.status);
            }
        } catch(error) {
            console.log("삭제 api 호출 실패 : ", error);
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

                    <RadioButton 
                        quantity={2} 
                        labelNames={labelNames}
                        krStatus={updateData.krStatus} 
                        setSelectedOption={setPostStatus} 
                        onChange={optionValue}
                    />
                </div>

                <div className={styles['hr']}> <hr /> </div>

                <div className={styles['buttonContainer']}>
                    <button className={styles['removeButtonStyle']} onClick={remove}>삭제하기</button>
                    <button className={styles['okButtonStyle']} onClick={update}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default SellWriteEdit;