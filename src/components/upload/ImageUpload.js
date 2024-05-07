import React, { useState } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';

import '../../styles/common/Styles.css';
import styles from '../../styles/upload/ImageUpload.module.css';

function ImageUpload({ onImagesUpload }) {
    const [imageURLs, setImageURLs] = useState([]);

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.onchange = (event) => {
            const selectedFile = event.target.files[0];
            const objectURL = URL.createObjectURL(selectedFile);
            setImageURLs(prevImageURLs => [...prevImageURLs, objectURL]);
            onImagesUpload(prevImages => [...prevImages, objectURL]);
        };
        input.click();
    };

    // image저장하는 api를 axios.post하여 image를 저장하기
    // const handleImageUpload = async () => {
    //     const input = document.createElement('input');
    //     input.type = 'file';
    //     input.accept = 'image/*';
    //     input.multiple = true;
    //     input.onchange = async (event) => {
    //         const selectedFile = event.target.files[0];
    //         const formData = new FormData();
    //         formData.append('image', selectedFile);

    //         try {
    //             const response = await axios.post(`${HOST}/post-images/${id}`, formData, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             });
    //             if (response.status === 200) {
    //                 // 이미지가 업로드되고 응답으로 받은 id를 저장
    //                 const uploadedImageId = response.data.id;
    //                 // 이후 이미지 URL과 함께 이미지 id도 저장
    //                 setImageURLs(prevImageURLs => [...prevImageURLs, { id: uploadedImageId, url: response.data.url }]);
    //             } else {
    //                 console.error("이미지 업로드 실패");
    //             }
    //         } catch (error) {
    //             console.error("이미지 업로드 요청 실패 : ", error);
    //         }
    //     };
    //     input.click();
    // }

    return (
        <>
            <div className={styles['imgScroll']}>
                <div className={styles['imgContainer']}>
                    <div className={styles['imgDiv']} onClick={handleImageUpload}>
                        <p>클릭하여<br />사진 업로드</p>
                    </div>
                    {imageURLs.map((imageURL, index) => (
                        <div key={index} className={styles['imgDiv']}>
                            <img src={imageURL} alt={`Uploaded Image ${index + 1}`} className={styles['imageURL']} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImageUpload;