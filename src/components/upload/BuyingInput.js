import '../../styles/common/Styles.css';
import styles from '../../styles/upload/BuyingInput.module.css';

import { HOST } from '../../config/Config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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

    const userId = Number(localStorage.getItem('userId'));
    const addBuyWrite = async (e) => {
        e.preventDefault();
        try {
            const request = await axios.post(`${HOST}/selling-posts`, {
                userId: userId,
                title: title,
                description: desc,
                price: price,
                location: location,
            });

            if (request.status === 201) {
                console.log("업로드 성공");
                const id = request.data.id;
                if (uploadedImages.length > 0) {
                    const formData = new FormData();
                    uploadedImages.forEach((imageURL, index) => {
                        formData.append(`image_${index}`, imageURL);
                    });
                    console.log(uploadedImages);
                    
                    // /post-images/{id} 서버 연결
                    fetch(`${HOST}/post-images/${id}`, {
                        method: 'POST',
                        cache: 'no-cache',
                        body: uploadedImages,
                        headers: { 'Content-Type': 'multipart/form-data' },
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                    });
                }

                navigate(`/buying-posts/${id}`);
            } else {
                console.error("업로드 실패");
            }
            
        } catch(error) {
            console.error("요청 실패 : ", error);
        }
    }

    return (
        <>
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
                <button className={styles['buttonStyle']} onClick={addBuyWrite}>등록하기</button>
            </div>
        </>
    )
}

export default BuyingInput;