import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/main/SelectSort.module.css';

function SelectSort({ data, onSort }) {
    const [selectedSort, setSelectedSort] = useState('');
    const handleSortClick = (sortType) => {
        setSelectedSort(sortType);
        if (sortType === '최신순') {
            const sortedData = sortRecent();
            onSort(sortedData);
        } else if (sortType === '인기순') {
            const sortedData = sortPopularity();
            onSort(sortedData);
        } else if (sortType === '가격 낮은 순') {
            const sortedData = sortPriceLow();
            onSort(sortedData);
        }
    };

    console.log(data);

    // 데이터 정렬하기
    const sortRecent = () => {
        const sortedData = [...data];
        return sortedData.sort((a, b) => {
            const dateComparison = new Date(b.createdAt) - new Date(a.createdAt);
            if (dateComparison === 0) {
                return b.id - a.id;
            }
            console.log("최신순으로 정렬");
            return dateComparison;
        });
    };

    const sortPopularity = () => {
        const sortedData = [...data];
        return sortedData.sort((a, b) => {
            const popularityComparison = b.views - a.views;
            if (popularityComparison === 0) {
                return b.id - a.id;
            }
            console.log("인기순으로 정렬");
            return popularityComparison;
        });
    }

    const sortPriceLow = () => {
        const sortedData = [...data];
        return sortedData.sort((a, b) => {
            const priceLow = a.price - b.price;
            if (priceLow === 0) {
                return a.id - b.id;
            }
            console.log("가격 낮은 순으로 정렬");
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