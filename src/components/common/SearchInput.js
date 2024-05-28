import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/common/Styles.css';
import searchInputStyle from '../../styles/common/SearchInput.module.css';

function SearchInput() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    // 엔터 키 입력 시 검색 실행
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const userId = localStorage.getItem("id");
            if (!userId) {
                navigate("/");
            } else {
                search();
            }
        }
    };

    const search = () => {
        if (searchKeyword.trim() !== '') {
            navigate(`/search?keyword=${encodeURIComponent(searchKeyword)}`);
        } else {
            navigate('/');
        }
    };

    return(
        <div className={searchInputStyle['searchDiv']}>
            <input 
                type='text' 
                placeholder='찾는 상품을 검색해 보세요!' 
                className={searchInputStyle['searchInput']} 
                value={searchKeyword}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default SearchInput;