import navStyle from '../../styles/common/nav.module.css';

import SearchInput from '../common/searchInput';

function Nav() {
    return (
        <>
            <nav className={navStyle['nav']}>
                <div className={navStyle['container1']}>
                    <div className={navStyle['titleDiv']}> <p>벼룩이</p> </div>
                    <div> <SearchInput /> </div>
                </div>
                <div className={navStyle['optionDiv']}>
                    <p>글쓰기</p>
                    <p>채팅</p>
                    <p>마이페이지</p>
                </div>
            </nav>
            <div style={{textAlign: 'center'}}> <hr /> </div>
        </>
    )
}

export default Nav;