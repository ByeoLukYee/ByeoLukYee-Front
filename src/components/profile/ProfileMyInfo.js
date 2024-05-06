import React from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/ProfileMyInfo.module.css';

function ProfileMyInfo({ data }) {
    // let studentId = data.studentId;
    // let grade = studentId[0];
    // let classroom = studentId[1];
    // let number = studentId.slice(2);
    // let formattedStudentId = `${grade}학년 ${classroom}반 ${number}번`;

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['imgDiv']}> <img src={process.env.PUBLIC_URL+'/images/exampleImg.png'} /> </div>
                <div className={styles['information']}>
                    <div className={styles['enameDiv']}>
                        <div className={styles['nameDiv']}> <p>{data.name}</p> </div>
                        <div className={styles['emailDiv']}> <p>{data.email}</p> </div>
                    </div>
                    <div className={styles['studentId']}> <p>{data.studentId}</p> </div>
                </div>
            </div>
        </>
    )
}

export default ProfileMyInfo;