import headerStyle from '../../styles/common/header.module.css';

import SearchInput from './searchInput';

function Header() {
    return (
        <>
            <nav className={headerStyle['nav']}>
                <div className={headerStyle['container1']}>
                    <div className={headerStyle['titleDiv']}> <p>벼룩이</p> </div>
                    <div> <SearchInput /> </div>
                </div>
                <div className={headerStyle['optionDiv']}>
                    <p>글쓰기</p>
                    <p>채팅</p>
                    <p>마이페이지</p>
                </div>
            </nav>
            <div style={{textAlign: 'center'}}> <hr /> </div>
        </>
    )
}

export default Header;