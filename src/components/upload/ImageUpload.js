import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/upload/ImageUpload.module.css';

function ImageUpload({ onImagesUpload }) {
    const [imageURLs, setImageURLs] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
        const urls = [];
        const uploadUrls = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                const url = URL.createObjectURL(file);
                urls.push(url);
                uploadUrls.push(file);
            }
        }
        setImageURLs(prevURLs => [...prevURLs, ...urls]);
        onImagesUpload(prevImages => [...prevImages, ...uploadUrls]);
    };

    return (
        <>
            <div className={styles['imgScroll']}>
                <div className={styles['imgContainer']}>
                    <label htmlFor='fileInput' className={styles['imgDiv']}>
                        <p>클릭하여<br />사진 업로드</p>
                    </label>
                    <input type="file" id="fileInput" multiple onChange={handleFileChange} />
                    {imageURLs.map((imageURL, index) => (
                        <div key={index} className={styles['imgDiv']}>
                            <img 
                                src={imageURL}
                                alt={`Uploaded Image ${index + 1}`}
                                className={styles['imageURL']}
                                id='imgUrl'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImageUpload;