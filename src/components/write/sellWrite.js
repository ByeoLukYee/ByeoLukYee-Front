import React, { useState } from 'react';

import sellWriteStyle from '../../styles/write/sellWrite.module.css';

import CameraIcon from './cameraIcon';

function SellWrite() {
    const [cameraIconIndex, setCameraIconIndex] = useState(0);
    const [imageURLs, setImageURLs] = useState(Array(10).fill(null));

    const handleImageUpload = (index) => {
        if (cameraIconIndex !== index) {
            return;
        }

         // 파일 탐색창 열기
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            // 파일 업로드
            const selectedFile = event.target.files[0];
            const objectURL = URL.createObjectURL(selectedFile);
            const newImageURLs = [...imageURLs];
            newImageURLs[index] = objectURL;
            setImageURLs(newImageURLs);
            // cameraIcon 다음 div로 이동
            if (index === 9) {
                setCameraIconIndex(null);
            } else {
                setCameraIconIndex(index + 1);
            }
        };
        input.click();
    };
    
    return (
        <>
            <div className={sellWriteStyle['topDiv']}>
                <p>상품 이미지 등록</p>
                <div className={sellWriteStyle['imgScroll']}>
                    <div className={sellWriteStyle['imgContainer']}>
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className={sellWriteStyle['imgDiv']} onClick={() => handleImageUpload(index)}>
                                {index === 0 && cameraIconIndex === -1 && <CameraIcon position={index} />}
                                {index === cameraIconIndex && <CameraIcon position={index} />}
                                {imageURLs[index] && <img src={imageURLs[index]} alt={`Uploaded Image ${index + 1}`} className={sellWriteStyle['imageURL']} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={sellWriteStyle['inputContainer']}>
                {/* 제목 */}
                <div className={sellWriteStyle['textDiv']}>
                    <p>제목</p>
                    <input placeholder='제목을 입력하시오.'/>
                </div>

                {/* 가격 */}
                <div className={sellWriteStyle['textDiv']}>
                    <p>가격</p>
                    <input placeholder='가격을 입력하시오.'/>
                </div>

                {/* 거래 희망 장소 */}
                <div className={sellWriteStyle['textDiv']}>
                    <p>거래 희망 장소</p>
                    <input placeholder='장소를 입력하시오.'/>
                </div>

                {/* 설명 */}
                <div className={sellWriteStyle['contextDiv']}>
                    <p>설명</p>
                    <textarea placeholder='설명을 입력하시오.'/>
                </div>
            </div>

            <div className={sellWriteStyle['buttonContainer']}>
                <button className={sellWriteStyle['buttonStyle']}>팝니다 글쓰기</button>
            </div>
        </>
    )
}

export default SellWrite;