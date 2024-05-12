import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/profile/Profile.module.css';

import Header from '../common/Header';
import ProfileList from './ProfileList';
import ProfileInfo from './ProfileInfo';
import ProfileSave from './ProfileSave';
import ProfileWriteManagement from './PostWriteManagement';
import Footer from '../common/Footer';

function Profile() {
    const [showSelectComponent, setShowSelectComponent] = useState('')

    const showComponent = () => {
        switch (showSelectComponent) {
            case 'writeManagement':
                return <ProfileWriteManagement />;
            default:
                return <ProfileSave />;
        }
    };

    const id = Number(localStorage.getItem("userId"));

    return( 
       <div className={styles['container']}>
            <Header />
            
            <div className={styles['divContainer']}>
                <ProfileList showSelectComponent={setShowSelectComponent} userId={id} />

                <div className={styles['profile']}>
                    <ProfileInfo userId={id}/>
                    
                    <div className={styles['lists']}>
                        {/* 바뀌는 화면 */}
                        {showComponent()}
                    </div>
                </div>
            </div>

            <Footer />
       </div>
    )
}

export default Profile;