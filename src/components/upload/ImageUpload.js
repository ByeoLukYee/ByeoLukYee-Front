import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/upload/ImageUpload.module.css';

function ImageUpload() {
    const [imageURLs, setImageURLs] = useState([]);

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const selectedFile = event.target.files[0];
            const objectURL = URL.createObjectURL(selectedFile);
            setImageURLs(prevImageURLs => [...prevImageURLs, objectURL]);
        };
        input.click();
    };

    // image저장하는 api를 axios.post하여 image를 저장하기

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