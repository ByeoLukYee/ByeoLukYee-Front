import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

import styles from '../../styles/common/styles.css';
import barStyle from '../../styles/page/page.module.css'

import Home from '../../components/home/home';
import Store from '../../components/store/store';
import Profile from '../../components/profile/profile';
import Write from '../../components/write/write';

import { RiHome2Line } from "react-icons/ri";
import { MdOutlineStore } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { PiPencilLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";

function Page() {
    /* 아이콘 색 변경 */
    const [activeIcon, setActiveIcon] = useState('home');
    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };

    // 클릭한 아이콘에 따라 해당 컴포넌트를 렌더링
    const renderComponent = () => {
        switch (activeIcon) {
            case 'home':
                return <Home />;
            case 'store':
                return <Store />;
            case 'profile':
                return <Profile />;
            case 'write':
                return <Write />;
            default:
                return null;
        }
    };

    return(
        <>
            {/* 아이콘 클릭할 때마다 바뀌는 부분 */}
            <div>{renderComponent()}</div>

            {/* 메뉴바 */}
            <nav>
                <div className={barStyle['menuBarIconDiv']}>
                    <Link>
                        <div className={activeIcon === 'home' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('home'); }}>
                            <RiHome2Line className={barStyle['iconStyles']}/>
                            <p>홈</p>
                        </div>
                    </Link>

                    <Link>
                        <div className={activeIcon === 'store' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('store'); }}>
                            <MdOutlineStore className={barStyle['smallIconStyles']}/>
                            <p>마켓</p>
                        </div>
                    </Link>

                    <Link> 
                        <div className={activeIcon === 'chatting' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('chatting'); }}>
                            <BsChatLeftText className={barStyle['bigIconStyles']} />
                            <p>채팅</p>
                        </div>
                    </Link>

                    <Link>
                        <div className={activeIcon === 'write' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('write'); }}>
                            <PiPencilLight className={barStyle['smallIconStyles']}/>
                            <p>글쓰기</p>
                        </div>
                    </Link>

                    <Link>
                        <div className={activeIcon === 'profile' ? `${barStyle['iconDiv']} ${barStyle['activeIcon']}` : barStyle['iconDiv']} onClick={() => { handleIconClick('profile'); }}>
                            <GoPerson className={barStyle['iconStyles']} />
                            <p>프로필</p>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Page;