import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/upload/BuyingInput.module.css';

import ImageUpload from './ImageUpload';

function BuyingInput() {
    // 팝니다 글쓰기 buying-posts/upload
    // 내가 쓴 팝니다 글쓰기 데이터 정보 post
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [id, setId] = useState('');

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

    const userId = localStorage.getItem('id');
    const addBuyWrite = async (e) => {
        e.preventDefault();
        
        // 이미지 추가 안하면 경고창 뜸
        if (uploadedImages.length === 0) {
            alert("이미지를 추가해주세요.");
            return;
        }

        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/selling-posts`, {
                userId: userId,
                title: title,
                description: desc,
                price: price,
                location: location,
            });

            if (request.status === 201) {
                console.log("업로드 성공");
                const postId = request.data.id;
                setId(postId);

                if (uploadedImages.length > 0) { 
                    const formData = new FormData();
                    uploadedImages.forEach(image => {
                        formData.append("file", image);
                    });
                    uploadedImage(postId, formData);
                } else {
                    console.log("업로드할 이미지가 없습니다.");
                    navigate(`/buying-posts/${postId}`);
                }

            } else {
                console.error("업로드 실패");
            }
            
        } catch(error) {
            console.error("요청 실패 : ", error);
        }
    }

    const uploadedImage = async (postId, formData) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/post-images/${postId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            
            console.log("이미지 업로드 성공", response.data);
            navigate(`/buying-posts/${postId}`);
        } catch (error) {
            console.error("이미지 업로드 요청 실패 : ", error);
        }
    }

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['inputContainer']}>
                    <ImageUpload onImagesUpload={setUploadedImages} />
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
                            placeholder='상품 상세 정보'
                            value={desc}
                            onChange={descValue}
                        />
                    </div>

                    <div className={styles['hr']}> <hr /> </div>
                </div>

                <div className={styles['buttonContainer']}>
                    <button className={styles['okButtonStyle']} onClick={addBuyWrite}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default BuyingInput;