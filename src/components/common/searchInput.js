import styles from '../../styles/common/styles.css';
import searchInputStyle from '../../styles/common/searchInput.module.css';

function SearchInput() {
    return(
        <div className={searchInputStyle['searchDiv']}>
            <input type='text' placeholder='관심있는 상품을 검색해보세요!' className={searchInputStyle['searchInput']} />
            <div className={searchInputStyle['searchImg']}> <img src={process.env.PUBLIC_URL + '/images/circum_search.png'} className={searchInputStyle['imageStyle']}/> </div>
        </div>
    )
}

export default SearchInput;