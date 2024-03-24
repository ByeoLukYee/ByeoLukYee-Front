import styles from '../../styles/common/styles.css'
import barStyle from '../../styles/common/menuBar.module.css';

import { RiHome2Line } from "react-icons/ri";
import { MdOutlineStore } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { PiPencilLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function MenuBar() {
    /* 아이콘 색 변경 */
    const [activeIcon, setActiveIcon] = useState(null);
    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };

    /* 아이콘 클릭 시 화면 이동 */
    const navigate = useNavigate();
    const IconClick = (path, iconName) => {
      navigate(path);
      setActiveIcon(iconName);
    };

    return(
        <div className={barStyle['topContainer']}>
            <div className={barStyle['menuBarIconDiv']}>
                <div className={activeIcon === 'home' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('home'); IconClick('/home'); }}>
                    <RiHome2Line className={barStyle['iconStyles']}/>
                    <p>홈</p>
                </div>
                <div className={activeIcon === 'store' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('store'); IconClick('/store'); }}>
                    <MdOutlineStore className={barStyle['iconStyles']}/>
                    <p>마켓</p>
                </div>
                <div className={activeIcon === 'chat' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('chat'); IconClick('/chat'); }}>
                    <BsChatLeftText className={barStyle['iconStyles']} />
                    <p>채팅</p>
                </div>
                <div className={activeIcon === 'write' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('write'); IconClick('/write'); }}>
                    <PiPencilLight className={barStyle['iconStyles']}/>
                    <p>글쓰기</p>
                </div>
                <div className={activeIcon === 'profile' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('profile'); IconClick('/profile'); }}>
                    <GoPerson className={barStyle['iconStyles']} />
                    <p>프로필</p>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;