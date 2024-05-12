import React, { useState, useEffect } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileMyInfo.module.css';

function ProfileMyInfo({ data }) {
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        if (data && data.studentId) {
            let studentId = data.studentId;
            let grade = studentId.slice(0, 1);
            let classroom = studentId.slice(1, 2);
            let number = studentId.slice(2);
            let formattedStudentId = `${grade}학년 ${classroom}반 ${number}번`;
            setStudentId(formattedStudentId);
        }
    }, [data]);

    if (!data || !data.studentId) {
        return null;
    }

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src={'/images/profileImage.png'} /> </div>
                <div className={styles['information']}>
                    <div className={styles['enameDiv']}>
                        <div className={styles['nameDiv']}> <p>{data.name}</p> </div>
                        <div className={styles['emailDiv']}> <p>{data.email}</p> </div>
                    </div>
                    <div className={styles['studentId']}> <p>{studentId}</p> </div>
                </div>
            </div>
        </>
    )
}

export default ProfileMyInfo;