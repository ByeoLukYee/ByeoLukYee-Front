import React, { useState } from 'react';

import auctionStyle from '../../styles/store/auctionParticipation.module.css';

import CameraIcon from '../write/cameraIcon';

import TitleBar from '../common/titleBar';

function AuctionParticipation() {
    const [cameraIconIndex, setCameraIconIndex] = useState(0);
    const [imageURLs, setImageURLs] = useState(Array(2).fill(null));

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
            <div className={auctionStyle['divContainer']}>
                <TitleBar />
                <div className={auctionStyle['DivStyle']}>
                    <p>경매 참여하기</p>
                </div>
                <div className={auctionStyle['topDiv']}>
                    <p>상품 이미지 등록</p>
                    <div className={auctionStyle['imgScroll']}>
                        <div className={auctionStyle['imgContainer']}>
                            {imageURLs.map((_, index) => (
                                <div key={index} className={auctionStyle['imgDiv']} onClick={() => handleImageUpload(index)}>
                                    {index === 0 && cameraIconIndex === -1 && <CameraIcon position={index} length={imageURLs.length} />}
                                    {index === cameraIconIndex && <CameraIcon position={index} length={imageURLs.length} />}
                                    {imageURLs[index] && <img src={imageURLs[index]} alt={`Uploaded Image ${index + 1}`} className={auctionStyle['imageURL']} />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={auctionStyle['inputContainer']}>
                    {/* 제목 */}
                    <div className={auctionStyle['textDiv']}>
                        <p>제목</p>
                        <input placeholder='제목을 입력하시오.'/>
                    </div>

                    {/* 가격 */}
                    <div className={auctionStyle['textDiv']}>
                        <p>가격</p>
                        <input placeholder='가격을 입력하시오.'/>
                    </div>

                    {/* 설명 */}
                    <div className={auctionStyle['contextDiv']}>
                        <p>설명</p>
                        <textarea placeholder='설명을 입력하시오.'/>
                    </div>
                </div>

                <div className={auctionStyle['buttonContainer']}>
                    <button className={auctionStyle['buttonStyle']}>경매 참여하기</button>
                </div>
            </div>
        </>
    )
}

export default AuctionParticipation;