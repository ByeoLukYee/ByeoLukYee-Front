import '../../styles/common/Styles.css';
import styles from '../../styles/upload/SellingInput.module.css';

import { HOST } from '../../config/Config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SellingInput() {
    // 삽니다 글쓰기 selling-posts/upload
    // 내가 쓴 삽니다 글쓰기 데이터 정보 post
    const navigate = useNavigate();

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


    const addSellWrite = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${HOST}/selling-posts`, {
                title: title,
                description: desc,
                price: price,
                location: location
            });
            console.log(response);

            if (response.status === 200) {
                console.log("업로드 성공");
                // /buying-posts/${id}
                navigate(`/buying-posts`);
            } else {
                console.error("업로드 실패");
            }
        } catch(error) {
            console.error("요청 실패 : ", error);
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
                </div>

                <div className={styles['hr']}> <hr /> </div>

                <div className={styles['buttonContainer']}>
                    <button className={styles['removeButtonStyle']}>삭제하기</button>
                    <button className={styles['okButtonStyle']} onClick={addSellWrite}>등록하기</button>
                </div>
            </div>
        </>
    )
}

export default SellingInput;