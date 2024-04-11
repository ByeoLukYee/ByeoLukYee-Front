import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/main/Select-sort.module.css';

function SelectSort() {
    const [selectedSort, setSelectedSort] = useState('');

    const handleSortClick = (sortType) => {
        setSelectedSort(sortType);
    };

    return (
        <>
            <p className={selectedSort === "최신순" ? `${styles.sortText} ${styles.selectText}` : `${styles.sortText} ${styles.defaultText}`} onClick={() => handleSortClick("최신순")}>최신순</p>
            <p className={selectedSort === "인기순" ? `${styles.sortText} ${styles.selectText}` : `${styles.sortText} ${styles.defaultText}`} onClick={() => handleSortClick("인기순")}>인기순</p>
            <p className={selectedSort === "가격 낮은 순" ? `${styles.sortText} ${styles.selectText}` : `${styles.sortText} ${styles.defaultText}`} onClick={() => handleSortClick("가격 낮은 순")}>가격 낮은 순</p>
        </>
    )
}

export default SelectSort;