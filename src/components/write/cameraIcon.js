import React from 'react';
import sellWriteStyle from '../../styles/write/sellWrite.module.css';

function CameraIcon({ position }) {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/images/cameraIcon.png'} alt="Camera Icon" />
            <div className={sellWriteStyle['pDiv']}>
                <p>{position}</p> <p>/</p> <p>10</p>
            </div>
        </>
    );
}

export default CameraIcon;