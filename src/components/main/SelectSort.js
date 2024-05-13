import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/main/SelectSort.module.css';

function SelectSort({ data }) {
    const [selectedSort, setSelectedSort] = useState('');
    const handleSortClick = (sortType) => {
        setSelectedSort(sortType);
        switch (sortType) {
            case '최신순':
                return sortRecent();
            case '인기순':
                return sortPopularity();
            case '가격 낮은 순':
                return sortPriceLow();
            default:
                return data;
        }
    };

    // 데이터 정렬하기
    const sortRecent = () => {
        return data.slice().sort((a, b) => {
            const dateComparison = new Date(b.createdAt) - new Date(a.createdAt);
            if (dateComparison === 0) {
                return b.id - a.id;
            }
            return dateComparison;
        });
    };

    const sortPopularity = () => {
        return data;
    }

    const sortPriceLow = () => {
        return data.sort((a, b) => {
            const priceLow = a.price - b.price;
            if (priceLow === 0) {
                return b.id - a.id;
            }
            return priceLow;
        });
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