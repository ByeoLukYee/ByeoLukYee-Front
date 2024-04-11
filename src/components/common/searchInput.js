import styles from '../../styles/common/styles.css';
import searchInputStyle from '../../styles/common/searchInput.module.css';

function SearchInput() {
    return(
        <div className={searchInputStyle['searchDiv']}>
            <input type='text' placeholder='찾는 상품을 검색해 보세요!' className={searchInputStyle['searchInput']} />
        </div>
    )
}

export default SearchInput;