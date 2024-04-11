import '../../styles/common/Styles.css';
import searchInputStyle from '../../styles/common/SearchInput.module.css';

function SearchInput() {
    return(
        <div className={searchInputStyle['searchDiv']}>
            <input type='text' placeholder='찾는 상품을 검색해 보세요!' className={searchInputStyle['searchInput']} />
        </div>
    )
}

export default SearchInput;