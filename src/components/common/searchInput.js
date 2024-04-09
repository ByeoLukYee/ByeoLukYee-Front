import '../../styles/common/Styles.css';
import styles from '../../styles/common/SearchInput.module.css';

function SearchInput() {
    return(
        <div className={styles['searchDiv']}>
            <input type='text' placeholder='찾는 상품을 검색해 보세요!' className={styles['searchInput']} />
        </div>
    )
}

export default SearchInput;