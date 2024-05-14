import React, { useEffect, useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/upload/ImageUpload.module.css';
import { ImageUrl } from '../../config/Config';

function ImageUpload({ onImagesUpload, initialImages }) {
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (initialImages) {
            const urls = initialImages.map(image => `${ImageUrl}/${image.uploadedFilename}`);
            setImageURLs(urls);
        }
    }, [initialImages]);

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

    const removeImage = (indexToRemove) => {
        if (window.location.pathname === '/buying-posts/upload') {
            setImageURLs(prevURLs => prevURLs.filter((url, index) => index !== indexToRemove));
            onImagesUpload(prevImages => prevImages.filter((file, index) => index !== indexToRemove));
        } else {
            alert("이미지는 수정할 수 없습니다.");
        }
    };

    const handleLabelClick = () => {
        if (window.location.pathname !== '/buying-posts/upload') {
            alert("이미지는 수정할 수 없습니다.");
        }
    };

    return (
        <>
            <div className={styles['imgScroll']}>
                <div className={styles['imgContainer']}>
                    <label htmlFor='fileInput' className={styles['imgDiv']} onClick={handleLabelClick}>
                        <p>클릭하여<br />사진 업로드</p>
                    </label>
                    {
                        window.location.pathname === '/buying-posts/upload' &&
                        <input type="file" id="fileInput" multiple onChange={handleFileChange} />
                    }
                    {imageURLs.map((imageURL, index) => (
                        <div key={index} className={styles['imgDiv']}>
                            <img 
                                onClick={() => removeImage(index)}
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